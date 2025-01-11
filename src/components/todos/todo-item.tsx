"use client";
import { startTransition, useOptimistic } from "react";
import { usePathname } from "next/navigation";
import { Todo } from "@prisma/client";
import styles from "@/styles/todos/todo-item.module.css";
import { CheckboxIcon, SquareIcon } from "@radix-ui/react-icons";

type ToggleTodo = (args: {
  id: string;
  complete: boolean;
  pathname: string;
}) => Promise<Todo | void>;

interface TodoItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const pathname = usePathname();

  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (todoState: Todo, newCompleteValue: boolean) => ({
      ...todoState,
      complete: newCompleteValue,
    })
  );

  const { complete, description, id } = todoOptimistic;

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!complete));
      await toggleTodo({ id, complete: !complete, pathname });
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!complete));
    }
  };

  return (
    <div
      className={`${
        complete ? styles.todoDone : styles.todoPending
      }  flex flex-col sm:flex-row justify-start items-center gap-4`}
    >
      <div
        onClick={onToggleTodo}
        className={`flex p-2 rounded-md cursor-pointer  ${
          complete ? "bg-blue-100 " : "bg-red-100 "
        } mr-4`}
      >
        {complete ? <CheckboxIcon /> : <SquareIcon />}
      </div>

      <div className="text-center">{description}</div>
    </div>
  );
};

export type { ToggleTodo };
export { TodoItem };
