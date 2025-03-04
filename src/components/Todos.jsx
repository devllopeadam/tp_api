/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos } from "../store/TodosSlice";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";


const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);


  return (
    <div className="flex flex-col gap-20 items-center">
      <CreateTodo />
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl text-blue-600 font-medium text-center">
          Todos
        </h1>
        <div className="flex flex-col gap-2 w-[500px]">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
