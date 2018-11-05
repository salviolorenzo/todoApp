const pgp = require("pg-promise")(); // this brings in a function
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'node-todo-app-db',
});

// Writing a SQL query in JS
// grabs all the rows 
function getAll() {
  return db.any('select * from todos')
}

// getAll()
// .then(results => {
// console.log(results);
// });

// grab one row
function getById(id) {
  return db.one(`select * from todos where id=$1`,
    [id])
    .catch(err => {
      return {
        name: `No todo found`
      }
    });
}

// getById(4)
//   .then(result => {
//     console.log(result);
//   });

//  adds a row
function addRow(name, completed) {
  return db.one(`insert into todos (name, completed) 
    values 
      ($1, $2)
    returning id`,
    [name, completed])

}

// addRow('clean windows', true)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   })

// update a row

// delete a row
function deleteById(id) {
  return db.result(`delete from todos where id = $1`, [id])
}

deleteById(11)
  .then(result => {
    console.log(result.rowCount);
  })