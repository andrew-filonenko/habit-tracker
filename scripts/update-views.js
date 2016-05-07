#!/usr/bin/env node
/* eslint-disable no-console */
require('babel-register');
const PouchDB = require('pouchdb');
const upsert = require('pouchdb-upsert');
const forceSeedDesdocs = require('../src/db/seed').forceSeedDesdocs;
const desdocs = require('../src/desdocs');
delete desdocs.default;

PouchDB.plugin(upsert);

const dbName = process.argv[2];
const db = new PouchDB(dbName, { skipSetup: true });
forceSeedDesdocs(db, desdocs)
  .then(console.log.bind(console, 'desdocs loaded'))
  .catch(console.log.bind(console, 'desdoc error'));
