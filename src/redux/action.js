// export const ADD_TODO = "ADD_TODO";

// let todoId = 0;

// export const addTodo = (
//   id,
//   task
//   // Name,
//   // Occupation,
//   // Dob,
//   // Street,
//   // House,
//   // City,
//   // PostalCode,
//   // PhoneNumber
// ) => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++todoId,
//     id,
//     task,

//     // Name,
//     // Occupation,
//     // Dob,
//     // Street,
//     // House,
//     // City,
//     // PostalCode,
//     // PhoneNumber,
//   },
// });


export const ADD_TODO = "ADD_TODO";

let todoId = 0;

export const addTodo = (task) => ({

  type: ADD_TODO,
  payload:task
  
});


// export const addTodo1 = Name => ({
//   type: ADD_TODO,
//   payload: {
//     id: ++todoId,
//    Name
//   }
// });