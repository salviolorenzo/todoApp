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

//  adds a row
function addRow(name, completed) {
  return db.one(`insert into todos (name, completed) 
    values 
      ($1, $2)
    returning id`,
    [name, completed])

}

// update a row
function updateCompleted(id) {
  return db.result(`update todos set completed=true where id= $1`, [id])

}
// delete a row
function deleteById(id) {
  return db.result(`delete from todos where id = $1`, [id])
}

function updateName(id, name) {
  return db.result(`update todos set name=$1 where id =$2`, [name, id])
}

module.exports = {
  addRow,
  getAll,
  getById,
  updateCompleted,
  updateName,
  deleteById
}