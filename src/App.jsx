import { useState } from "react";

import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-50  h-screen p-0 flex justify-start flex-col">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
