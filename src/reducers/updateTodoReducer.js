export default function(state = { updateIndex: null }, action) {
  switch (action.type) {
    case "UPDATE_TODO":
      console.log(action, "action");
      return Object.assign({}, state, {
        updateIndex: action.todoIndex
      });
    case "SAVE_UPDATED_TEXT":
      return Object.assign({}, state, {
        updateIndex: null
      });
    case "EDITED_TEXT":
      return Object.assign({}, state, {
        newText: action.value
      });

    default:
      return state;
  }
}
