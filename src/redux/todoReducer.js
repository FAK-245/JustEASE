import { ADD_TODO } from "./action";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, Task } = action.payload;
      return {
        ...state,
        todos: [...state.todos, { id, Task }],
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
