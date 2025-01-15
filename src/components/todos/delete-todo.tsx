"use client";
import { usePathname, useRouter } from "next/navigation";
import * as TodosApi from "@/helpers/todos/todos";
import { Button } from "@/components/ui/button";
import { Trash2Icon } from "lucide-react";
import { deleteTodos } from "@/actions/todos/action-todos";

interface DeleteCompletedTodoProps {
  hasServerAction?: boolean;
}

const DeleteCompletedTodo = ({
  hasServerAction = false,
}: DeleteCompletedTodoProps) => {
  const pathname = usePathname();

  const { refresh } = useRouter();

  const deleteCompleteTodos = async () => {
    await TodosApi.deleteTodos();
    refresh();
  };

  return (
    <div>
      <Button
        variant={"destructive"}
        onClick={() =>
          hasServerAction ? deleteTodos({ pathname }) : deleteCompleteTodos()
        }
      >
        <Trash2Icon /> Borrar completados
      </Button>
    </div>
  );
};

export { DeleteCompletedTodo };
