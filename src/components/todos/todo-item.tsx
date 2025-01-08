import { Todo } from "@prisma/client";
import styles from "@/styles/todos/todo-item.module.css";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { complete, 
    // createdAt, description, id, updatedAt
   } = todo;

  return (
    <div className={complete ? styles.todoDone : styles.todoPending}>
      {todo.description}
    </div>
  );
};

export { TodoItem };
