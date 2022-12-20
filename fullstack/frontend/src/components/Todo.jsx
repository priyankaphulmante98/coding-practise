import React, { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import axios from "axios";

function Todo() {
  const [todo, setTodo] = useState([]);

  function handleAdd(text) {
    // setTodo([...todo, { title: text, status: false }]);

    axios.post("http://localhost:8080/todos", {
      title: text,
      status: false,
    });
    getTodo();
  }

  function UpdateTodo(id, status) {
    axios.patch(`http://localhost:8080/todos/${id}`, {
      status,
    });
    getTodo();
  }

  useEffect(() => {
    getTodo();
  }, []);
  function getTodo() {
    axios.get("http://localhost:8080/todos").then((res) => {
      console.log(res.data.data);
      setTodo(res.data.data);
    });
  }

  function handleDelete(id) {
    axios.delete(`http://localhost:8080/todos/${id}`);

    getTodo();
  }

  return (
    <div>
      <AddTodo handleAdd={handleAdd} />
      <TodoList
        todo={todo}
        UpdateTodo={UpdateTodo}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Todo;
