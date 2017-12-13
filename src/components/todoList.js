import React from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    todoArr: state.todos
  };
}

const TodoList = props => {
  return (
    <div>
      <ul>
        {props.todoArr.map(element => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(TodoList);
