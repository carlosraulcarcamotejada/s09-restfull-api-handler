"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as TodosApi from "@/helpers/todos/todos";
import { createTodo } from "@/actions/todos/action-todos";

interface NewTodoProps {
  hasServerAction?: boolean;
}

const NewTodo = ({ hasServerAction = false }: NewTodoProps) => {
  const pathname = usePathname();

  const { refresh } = useRouter();
  // Schema
  const formSchema = z.object({
    todo: z.string().min(2, {
      message: "TODO debe ser al menos 2 caracteres.",
    }),
  });
  // default Values
  const defaultValues: z.infer<typeof formSchema> = { todo: "" };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (values.todo.trim().length === 0) return;

    if (hasServerAction) {
      createTodo({ description: values.todo, pathname });
    } else {
      await TodosApi.createTodo({ description: values.todo });
    }
    refresh();
    form.reset(defaultValues);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="todo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Todo</FormLabel>
              <FormControl>
                <Input placeholder="todo" {...field} />
              </FormControl>
              <FormDescription>Este es el TODO a ingresar</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Crear</Button>
      </form>
    </Form>
  );
};

export { NewTodo };
