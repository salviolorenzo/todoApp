const pgp = require("pg-promise")(); // this brings in a function
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'node-todo-app-db',
});

// Writing a SQL query in JS
// grabs all the rows 
db.any('select * from todos')
  .then(results => {
    console.log(results);
  });

// grab one row
db.one('select * from todos where id=5')
  .then(result => {
    console.log(result);
  })

// adds a row

// update a row

// delete a row