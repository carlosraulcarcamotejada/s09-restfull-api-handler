import { startTransition, useOptimistic } from "react";
import { usePathname } from "next/navigation";
import { Todo } from "@prisma/client";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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
    <Card className="p-4 flex gap-x-4 items-center justify-center">
      <Checkbox
        checked={complete}
        id={description}
        onCheckedChange={onToggleTodo}
      />
      <Label className={complete ? "line-through" : ""} htmlFor={description}>
        {description}
      </Label>
    </Card>
  );
};

export type { ToggleTodo };
export { TodoItem };
