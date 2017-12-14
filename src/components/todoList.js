import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

function mapStateToProps(state) {
  return {
    todoArr: state.todos
  };
}

const TodoList = props => {
  const deleteItem = e => {
    props.deleteTodo(e.target.id);
  };
  const updateItem = e => {
    props.UpdateItem(e.target.id);
  };

  return (
    <div>
      <ul>
        {props.todoArr.map((element, index) => {
          return (
            <li key={index}>
              {element}
              <button id={index} onClick={deleteItem}>
                Delete
              </button>
              <button id={index} onClick={updateItem}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, { deleteTodo })(TodoList);
