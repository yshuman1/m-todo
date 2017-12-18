import React from "react";
import { connect } from "react-redux";
import { updateReduxInput, saveTodo } from "../actions";

function mapStateToProps(state) {
  return {
    todoForm: state.todoForm
  };
}

const TodoFormField = props => {
  const updateField = e => {
    props.updateReduxInput(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    props.saveTodo(props.todoForm);
  };
  console.log(props);

  return (
    <form>
      <input
        onChange={updateField}
        type="text"
        placeholder="add todo here"
        value={props.todoForm}
      />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
};

export default connect(mapStateToProps, {
  updateReduxInput,
  saveTodo
})(TodoFormField);
