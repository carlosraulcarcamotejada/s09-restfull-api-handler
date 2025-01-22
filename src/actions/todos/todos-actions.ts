"use server";
// import { sleep } from "@/helpers/common/sleep";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { getUserSessionServer } from "../auth/auth-actions";

interface ActionTodos {
  pathname: string;
}

export const toggleTodo = async (
  args: ActionTodos & { id: string; complete: boolean }
): Promise<Todo | undefined> => {
  try {
    // await sleep(3);

    const { complete, id, pathname } = args;

    const todo = await prisma.todo.findFirst({ where: { id } });

    if (!todo) throw `Todo con id:${id} no encontrado`;

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete },
    });

    revalidatePath(pathname);
    return updatedTodo;
  } catch (error) {
    return undefined;
  }
};

export const createTodo = async (
  args: ActionTodos & { description: string }
) => {
  const { description, pathname } = args;
  const user = await getUserSessionServer();
  try {
    const todo = await prisma.todo.create({
      data: { description, userId: user?.id ?? "" },
    });
    revalidatePath(pathname);
    return todo;
  } catch (error) {
    return {
      message: "Error creando todo",
    };
  }
};

export const deleteTodos = async (args: ActionTodos): Promise<void> => {
  try {
    const { pathname } = args;
    await prisma.todo.deleteMany({
      where: { complete: true },
    });
    revalidatePath(pathname);
  } catch (error) {}
};
