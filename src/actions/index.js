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

export const updateTodo = todoIndex => ({
  type: "UPDATE_TODO",
  todoIndex
});

export const editedTextActionCreator = value => ({
  type: "EDITED_TEXT",
  value
});

export const saveUpdateActionCreator = value => ({
  type: "SAVE_UPDATED_TEXT",
  value
});
