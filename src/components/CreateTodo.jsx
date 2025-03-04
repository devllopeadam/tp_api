import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../store/TodosSlice";

const CreateTodo = () => {
  const [data, setData] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(data));
    setData({ title: "", description: "" });
  }

  return (
    <form onSubmit={hanldeSubmit} className="flex flex-col gap-4 w-[400px]">
      <h1 className="text-3xl text-center mb-2">Create new todo</h1>
      <input className="w-full rounded-md border px-4 py-2" type="text" placeholder="Enter a todo title" value={data.title} onChange={(e) => setData({...data, title: e.target.value})} />
      <textarea className="w-full rounded-md border px-4 py-2" placeholder="Enter a todo description" value={data.description} onChange={(e) => setData({...data, description: e.target.value})} />
      <button className="bg-indigo-500 rounded-md shadow-md py-2 text-white" type="submit">Create</button>
    </form>
  );
};

export default CreateTodo;
