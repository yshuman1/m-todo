export default function(state = [], action) {
  switch (action.type) {
    case "SAVE_TODO":
      return [...state, action.todoItem];
    case "DELETE_TODO":
      console.log(action.todoIndex + 1);

      return [
        ...state.slice(0, action.todoIndex),
        ...state.slice(Number(action.todoIndex) + 1)
      ];
    case "SAVE_UPDATED_TEXT":
      let newArr = state.slice(0, action.value.updateIndex);
      let after = state.slice(Number(action.value.updateIndex) + 1);

      return [...newArr, action.value.newText, ...after];
    default:
      return state;
  }
}
