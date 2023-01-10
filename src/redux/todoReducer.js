// import { ADD_TODO } from "./action";

// const initialState = {
//   todos: [],
// };

// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO: {
//       const {
//          id,
//         task,
        // Name,
        // Occupation,
        // Dob,
        // Street,
        // House,
        // City,
        // PostalCode,
        // PhoneNumber,
//       } = action.payload;
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//              id,
//              task,
//             // Name,
//             // Occupation,
//             // Dob,
//             // Street,
//             // House,
//             // City,
//             // PostalCode,
//             // PhoneNumber,
//           },
//         ],
//       // const { id, Task } = action.payload;
//       // return {
//       //   ...state,
//       //   todos: [...state.todos, { id, Task }],
//        };
//     }
//     default:
//       return state;
//   }
// };

// export default todoReducer;


import { ADD_TODO } from "./action";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, task, Name
         } = action.payload
      return {
        ...state,
        // todos: [ ...state.todos, {
        //    id, 
        //   task,
        //   Name
         
        //    }]
        todos:  action.payload
     
      };
    }
    default:
      return state;
  }
}

export default todoReducer;