export default function(state = [], action) {
  switch (action.type) {
    case "SAVE_TODO":
      return [...state, action.todoItem];
    default:
      return state;
  }
}
