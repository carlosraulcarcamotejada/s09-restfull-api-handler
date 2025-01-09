import { DeleteCompletedTodo } from "@/components/todos/delete-todo";
import { NewTodo } from "@/components/todos/new-todo";
import { TodosGrid } from "@/components/todos/todos-grid";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";

export const metadata = {
  title: "Todo's",
  description: "Listado de Todo's",
};

export default async function RestTodosPage() {
  const todos: Todo[] = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <div className="flex flex-col gap-y-10">
      <NewTodo />
      <DeleteCompletedTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}
