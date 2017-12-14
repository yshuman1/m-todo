export const updateReduxInput = input => ({
  type: "UPDATE_INPUT_FIELD",
  input
});

export const saveTodo = todoItem => ({
  type: "SAVE_TODO",
  todoItem
});

export const deleteTodo = todoIndex => ({
  type: "DELETE_TODO",
  todoIndex
});
