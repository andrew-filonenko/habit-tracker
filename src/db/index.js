import PouchDB from 'pouchdb';
import forEach from 'lodash/forEach';
import isObject from 'lodash/isObject';
import reduce from 'lodash/reduce';
import * as desdocs from '../desdocs';

// pouchdb plugins
import auth from 'pouchdb-authentication';
import upsert from 'pouchdb-upsert';

PouchDB.plugin(auth);
PouchDB.plugin(upsert);

export const remote = new PouchDB('http://localhost:5984/goals', { skipSetup: true });
export const local = new PouchDB('goals');

function traverseDesdoc(desdoc) {
  if (typeof desdoc === 'function') return `(${desdoc.toString()})`;
  if (!isObject(desdoc)) return desdoc;
  return reduce(desdoc, (memo, value, key) => {
    return Object.assign(memo, { [key]: traverseDesdoc(value) });
  }, {});
}

function seed(db, name, desdoc) {
  desdoc.language = 'javascript';
  return db.upsert(`_design/${name}`, () => traverseDesdoc(desdoc));
}

local.sync(remote, { live: true, retry: true }).on('error', console.log.bind(console));

forEach(desdocs, (desdoc, name) => {
  seed(local, name, desdoc)
   .then(console.log.bind(console, `${name} desdoc loaded`))
   .catch(console.error.bind(console, `{name} desdoc loading error`));
});

