import { Segment } from "@/interfaces/api/segment";
import {
  NextResponse,
  //  NextRequest
} from "next/server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { z } from "zod";

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo: Todo | null = await prisma.todo.findFirst({ where: { id } });

  return todo;
};

export async function GET(
  // request: Request,
  segment: { params: { id: string } }
) {
  const { id } = segment?.params ?? "";

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: "Todo no encontrado" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      message: "Todo encontrado",
      todo,
    },
    { status: 200 }
  );
}

const todoSchema = z.object({
  description: z.string().optional(),
  complete: z.boolean().optional(),
});

export async function PUT(request: Request, segment: Segment) {
  const { id } = segment?.params ?? "";

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: "Todo no encontrado" },
      { status: 400 }
    );
  }

  try {
    const { complete, description } = todoSchema.parse(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description },
    });

    return NextResponse.json(
      {
        message: "Todo actualizado",
        updatedTodo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error,
      },
      { status: 400 }
    );
  }
}
