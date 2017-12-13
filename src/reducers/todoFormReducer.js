export default function(state = "", action) {
  switch (action.type) {
    case "UPDATE_INPUT_FIELD":
      return action.input;
    case "SAVE_TODO":
      return "";
    default:
      return state;
  }
}
