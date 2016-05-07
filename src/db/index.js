/* eslint-disable no-console */

import PouchDB from 'pouchdb';
import * as desdocs from '../desdocs';
import { seedDesdocs } from './seed';

// pouchdb plugins
import auth from 'pouchdb-authentication';
import upsert from 'pouchdb-upsert';

PouchDB.plugin(auth);
PouchDB.plugin(upsert);

export const remote = new PouchDB('http://localhost:5984/goals', { skipSetup: true });
export const local = new PouchDB('goals');

local.sync(remote, { live: true, retry: true }).on('error', console.log.bind(console));

seedDesdocs(local, desdocs)
  .then(console.log.bind(console, 'desdocs loaded'))
  .catch(console.log.bind(console, 'desdoc error'));

