import { Todo } from "@prisma/client";
import { TodoItem } from "./todo-item";

interface TodosGridProps {
  todos?: Todo[];
}

const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  return (
    <div className="flex flex-wrap gap-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export { TodosGrid };
