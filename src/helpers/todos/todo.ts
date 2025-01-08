import { Todo } from "@prisma/client";

const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const body = { complete };

  const updatedTodo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

  console.log(updatedTodo);

  return updatedTodo;
};

export { updateTodo };
