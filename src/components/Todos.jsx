import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/toDoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="mx-10 mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-4">Todos</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
          >
            <span className="text-base">{todo.text}</span>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-red-500  hover:bg-red-100 p-2 rounded-full transition"
              aria-label="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a2 2 0 00-2-2H9a2 2 0 00-2 2m3-3h4"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
