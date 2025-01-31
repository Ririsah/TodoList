import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="todo-container">
        <div className="content">
          <p>{todo.text}</p>
          <p className="category">({todo.category})</p>
        </div>
        <div>
          <button className="complete" onClick={() => completeTodo(todo.id)}>
          ✔️</button>
          <button className="remove" onClick={() => removeTodo(todo.id)}>
          ❌</button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Todo;