export const ADD_TODO = "ADD_TODO";

let todoId = 0;

export const addTodo = (
  task,
  Name,
  Occupation,
  Dob,
  Street,
  House,
  City,
  PostalCode,
  PhoneNumber
) => ({
  type: ADD_TODO,
  payload: {
    id: ++todoId,
    task,

    Name,
    Occupation,
    Dob,
    Street,
    House,
    City,
    PostalCode,
    PhoneNumber,
  }
});
