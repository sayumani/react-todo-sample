import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from './AddTodo'
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "Turn on the laptop"
      },
      {
        id: 2,
        content: "Login"
      }
    ]
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todos , todo];
    this.setState({
      todos 
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos
          todos={this.state.todos}
          deleteTodo={this.deleteTodo}
        />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
