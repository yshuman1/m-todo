import React, { Component } from "react";
import TodoFormField from "./components/todoFormField";
import TodoList from "./components/todoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
        <TodoFormField />
      </div>
    );
  }
}

export default App;
