export const dynamic = "force-dynamic";
export const revalidate = 0;
import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { DeleteCompletedTodo } from "@/components/todos/delete-todo";
import { NewTodo } from "@/components/todos/new-todo";
import { TitlePage } from "@/helpers/common/title-page";
import { TodosGrid } from "@/components/todos/todos-grid";

export const metadata: Metadata = {
  title: "Server Actions Todos",
  description: "Server Actions Todos",
};

export default async function ServerActionTodosPage() {
  const todos: Todo[] = await prisma.todo.findMany({
    orderBy: { description: "asc" },
  });

  return (
    <div className="flex flex-col items-center gap-y-10 pb-40">
      <TitlePage title="Server Actions Todo's" />

      <NewTodo hasServerAction />

      <DeleteCompletedTodo hasServerAction />

      <TodosGrid hasServerAction todos={todos} />
    </div>
  );
}
