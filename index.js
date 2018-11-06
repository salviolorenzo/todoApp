// Access info from .env
require('dotenv').config();

// brings in all the functions in one object
const Todo = require('./models/Todo');

Todo.updateCompleted(1)
  .then(result => {
    console.log(result);
  });

// Todo.updateName(4, '')
//   .then(result => {
//     console.log(result);
//   });

// Todo.getAll()
// .then(results => {
// console.log(results);
// });


// Todo.getById(4)
//   .then(result => {
//     console.log(result);
//   });


// Todo.addRow('clean windows', true)
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   })



// Todo.deleteById(15)
  // .then(result => {
    // console.log(result.rowCount);
  // })