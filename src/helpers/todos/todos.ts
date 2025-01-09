import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete };

  const updatedTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  console.log(updatedTodo);

  return updatedTodo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };

  const createdTodo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  console.log(createdTodo);

  return createdTodo;
};

export const deleteTodos = async (): Promise<Todo> => {
  const deletedTodo = await fetch(`/api/todos`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  console.log(deletedTodo);

  return deletedTodo;
};
