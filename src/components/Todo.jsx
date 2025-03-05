import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/TodosSlice";
import { useState } from "react";
import { Link } from "react-router-dom";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(todo.completed);

  const hanldeDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const hanldeUpdateCompleted = () => {
    setCompleted(!completed);
    dispatch(
      updateTodo({ id: todo.id, updatedTodo: { completed: !completed } })
    );
  };

  return (
    <div className="flex items-center justify-between gap-2 bg-white shadow-md rounded-md px-4 py-3 w-full">
      <div className="flex items-center gap-2">
        <input
          className="w-5 h-5"
          type="checkbox"
          checked={completed}
          onChange={hanldeUpdateCompleted}
        />
        <p className="text-lg">{todo.title}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => hanldeDeleteTodo(todo.id)}
          className="text-white bg-red-500 px-2 py-[6px] rounded-md shadow-md">
          Delete
        </button>
        <Link
          to={`/todos/${todo.id}`}
          className="text-white bg-green-500 px-2 py-[6px] rounded-md shadow-md">
          Update
        </Link>
      </div>
    </div>
  );
};

export default Todo;
