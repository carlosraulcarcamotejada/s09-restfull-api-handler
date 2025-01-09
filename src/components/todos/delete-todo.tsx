"use client";
import { useRouter } from "next/navigation";
import * as TodosApi from "@/helpers/todos/todos";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

const DeleteCompletedTodo = () => {
  const { refresh } = useRouter();

  const deleteCompleteTodos = async () => {
    await TodosApi.deleteTodos();
    refresh();
  };

  return (
    <div>
      <Button variant={"destructive"} onClick={deleteCompleteTodos}>
        <TrashIcon /> Borrar completados
      </Button>
    </div>
  );
};

export { DeleteCompletedTodo };
