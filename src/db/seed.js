import reduce from 'lodash/reduce';
import isObject from 'lodash/isObject';
import map from 'lodash/map';

function traverseDesdoc(desdoc) {
  if (typeof desdoc === 'function') return `(${desdoc.toString()})`;
  if (!isObject(desdoc)) return desdoc;
  return reduce(desdoc, (memo, value, key) => {
    return Object.assign(memo, { [key]: traverseDesdoc(value) });
  }, {});
}

export const seed = db => (desdoc, name) => {
  desdoc.language = 'javascript';
  const designId = `_design/${name}`;
  const processedDesdoc = traverseDesdoc(desdoc);
  return db.putIfNotExists(designId, processedDesdoc).then(res => [name, res]);
};

export const forceSeed = db => (desdoc, name) => {
  desdoc.language = 'javascript';
  const designId = `_design/${name}`;
  const processedDesdoc = traverseDesdoc(desdoc);
  return db.upsert(designId, () => processedDesdoc).then(res => [name, res]);
};

export function seedDesdocs(db, desdocs) {
  return Promise.all(map(desdocs, seed(db)));
}

export function forceSeedDesdocs(db, desdocs) {
  return Promise.all(map(desdocs, forceSeed(db)));
}
