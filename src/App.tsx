import { useAppDispatch, useAppSelector } from "./store/hooks.ts";
import Todo from "./components/Todo.tsx";
import React, { useState } from "react";
import { addTodo } from "./store/todoSlice.ts";

function App() {
  const [newTodoTitle, setnewTodoTitle] = useState<string>("");

  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  const onNewTodoTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnewTodoTitle(e.target.value);
  };

  const onTodoAdd = () => {
    dispatch(
      addTodo({ title: newTodoTitle, completed: false, id: todos.length })
    );
    setnewTodoTitle("");
  };

  return (
    <section className="w-[600px]  pb-20 p-2 rounded-2xl bg-blue-200 m-auto mt-14">
      <div
        className={
          " h-28 flex flex-col justify-center items-center border-b-2 border-blue-300"
        }
      >
        <p className="text-xl mb-2">Todo List</p>
        <div className={"flex justify-evenly w-[80%] items-center"}>
          <input
            type="text"
            value={newTodoTitle}
            onChange={onNewTodoTitleChange}
            className={"text-lg rounded-2xl w-80 h-12 p-4 focus:outline-0"}
          />
          <button
            onClick={onTodoAdd}
            className={"rounded-2xl text-lg bg-green-300 p-3"}
          >
            Add Todo
          </button>
        </div>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
        ))}
      </div>
    </section>
  );
}

export default App;
