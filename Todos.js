import React from "react";

const Todos = ({ todos, deleteTodo ,markComplete }) => {
  const checkMark = "✔";
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className={todo.complete === true ? "completed" : ""}>{todo.content}</span>
          <span className="actions">
            <span className="delete" onClick={() => deleteTodo(todo.id)} title="Delete todo">
              X
            </span>
            <span className="mark-done" hidden={todo.complete} onClick={()=> markComplete(todo.id)} title="mark completed">{checkMark}</span>
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo left</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
