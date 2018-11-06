const pgp = require("pg-promise")({
  query: e => {
    console.log('QUERY: ', e.query);
    if (e.params) {
      console.log('PARAMS:', e.params);
    }
  }
});
// this brings in a function
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'node-todo-app-db',
});

module.exports = db;