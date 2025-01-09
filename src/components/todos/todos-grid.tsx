"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "./todo-item";
import * as TodosApi from "@/helpers/todos/todos";
import { useRouter } from "next/navigation";

interface TodosGridProps {
  todos?: Todo[];
}

const TodosGrid = ({ todos = [] }: TodosGridProps) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await TodosApi.updateTodo(id, complete);

    router.refresh();
  };

  return (
    <div className="flex flex-wrap gap-8">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export { TodosGrid };
