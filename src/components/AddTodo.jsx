import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/toDoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    // dispatch is like setting the state like setTodo
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      className="w-full mx-10 mt-8 p-6  flex flex-row justify-center  rounded-2xl"
      onSubmit={addTodoHandler}
    >
      <div className=" space-x-3">
        <input
          type="text"
          value={input}
          placeholder="Enter a to do"
          className="bg-gray-800 rounded border
border-gray-700 focus:border-indigo-500
focus: ring-2 focus: ring-indigo-900 text-base
outline-none text-gray-100 py-1 px-3 leading-8
transition-colors duration-200 ease-in-out"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2
px-6 focus:outline-none hover:bg-indigo-600
rounded text-lg"
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
