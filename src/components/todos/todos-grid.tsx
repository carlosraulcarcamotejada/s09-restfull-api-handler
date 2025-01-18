"use client";
import { useRouter } from "next/navigation";
import { Todo } from "@prisma/client";
import { TodoItem } from "@/components/todos/todo-item";
import * as TodosApi from "@/helpers/todos/todos";
import { toggleTodo } from "@/actions/todos/action-todos";

interface TodosGridProps {
  hasServerAction?: boolean;
  todos: Todo[];
}

const TodosGrid = ({ hasServerAction = false, todos }: TodosGridProps) => {
  const router = useRouter();

  const RestToggleTodo = async (args: { id: string; complete: boolean }) => {
    const { complete, id } = args;
    const updatedTodo = await TodosApi.updateTodo({ id, complete });
    router.refresh();
    return updatedTodo;
  };

  return (
    <div className="flex justify-center flex-wrap w-4/5 gap-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={hasServerAction ? toggleTodo : RestToggleTodo}
        />
      ))}
    </div>
  );
};

export { TodosGrid };
