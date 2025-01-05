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

  return <TodosGrid todos={todos} />;
}
