"use client";
import { Todo } from "@prisma/client";
import styles from "@/styles/todos/todo-item.module.css";
import { CheckboxIcon, SquareIcon } from "@radix-ui/react-icons";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const {
    complete,
    //
    // createdAt,
    description,
    // id,
    // updatedAt
  } = todo;

  return (
    <div
      className={`${
        complete ? styles.todoDone : styles.todoPending
      }  flex flex-col sm:flex-row justify-start items-center gap-4`}
    >
      <div
        onClick={() => toggleTodo(todo.id, !todo.complete)}
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

export { TodoItem };
