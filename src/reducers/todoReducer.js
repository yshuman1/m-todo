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
    default:
      return state;
  }
}
