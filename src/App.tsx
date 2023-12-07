import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";

import { Todo } from "./model";
import TodosList from "./components/TodosList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isCompleted: false,
        },
      ]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <h1 className="heading">Todo-TypeScript</h1>
      <InputField todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
