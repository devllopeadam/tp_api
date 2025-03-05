import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { updateTodo } from "../store/TodosSlice";

const TodoPage = () => {
  const { id } = useParams();
  const todo = useSelector((state) => state.todos.find((todo) => todo.id == id));
  const [data, setData] = useState({ title: todo.title, description: todo.description, completed: todo.completed });
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({id: id, updatedTodo: data}));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10 items-center w-[400px] justify-center mx-auto">
      <Link to={"/"} className="text-indigo-600">Return to home</Link>
      <h1 className="text-3xl text-center font-medium">Todo Page</h1>
      {todos
        .filter((todo) => todo.id == id)
        .map((todo) => (
          <div className="flex flex-col gap-2 w-full">
            <input
              key={todo.id}
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              className="w-full rounded-md border px-4 py-2"
            />
            <textarea
              className="w-full rounded-md border px-4 py-2"
              placeholder="Enter a todo description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
            />
            <div className="flex items-center gap-2">
              <label>Completed: </label>
              <input
                className="w-5 h-5"
                type="checkbox"
                checked={data.completed}
                onChange={(e) =>
                  setData({ ...data, completed: e.target.checked })
                }
              />
            </div>
              <button className="bg-indigo-500 rounded-md shadow-md py-2 text-white">
                Save
              </button>
          </div>
        ))}
    </form>
  );
};

export default TodoPage;
