"use client";
import React, { useEffect, useState } from "react";

const ClientFetch = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://dummyjson.com/todos/");
      let data = await response.json();
      data = data.todos;
      setTodos(data);
    }
    fetchData();
  }, []);

  return (
    <>
      {todos.map((todo) => {
        return (
          <div
            className=" text-emerald-900 font-semibold text-lg px-4 py-2 border my-1 border-black"
            key={todo.id}
          >
            {todo.todo}
          </div>
        );
      })}
    </>
  );
};

export default ClientFetch;
