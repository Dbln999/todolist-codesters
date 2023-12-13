import { ITodo } from "../types/Todo.ts";
import { useAppDispatch } from "../store/hooks.ts";
import { removeTodo, updateTodo } from "../store/todoSlice.ts";
import { memo } from "react";

type TodoProps = {
  todo: ITodo;
};

const Todo = memo(({ todo }: TodoProps) => {
  const dispatch = useAppDispatch();
  const onCheckboxChange = () => {
    dispatch(updateTodo(todo.id));
  };

  const onRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div
      className={"w-full p-2 flex justify-between border-b-2 border-blue-300"}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onCheckboxChange}
      />
      <p className={`text-xl ${todo.completed && "line-through"}`}>
        {todo.title}
      </p>
      <p onClick={onRemoveTodo} className={"text-2xl cursor-pointer"}>
        🗑️
      </p>
    </div>
  );
});

export default Todo;
