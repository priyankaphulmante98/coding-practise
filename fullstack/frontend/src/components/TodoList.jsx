import React from "react";
import Todo from "./Todo";
import TodoItem from "./TodoItem";

function TodoList({ todo,UpdateTodo,handleDelete }) {
  return (
    <div>
      {todo.map((e) => (
        <TodoItem key={e._id} {...e} UpdateTodo={UpdateTodo} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TodoList;
