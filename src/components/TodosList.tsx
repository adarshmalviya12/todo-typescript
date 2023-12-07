import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodosList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos?.map((item) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          item={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default TodosList;
