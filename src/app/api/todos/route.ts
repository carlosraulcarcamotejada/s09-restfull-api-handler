import {
  NextResponse,
  // NextRequest
} from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { getUserSessionServer } from "@/actions/auth/auth-actions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const take: number = Number(searchParams.get("take") ?? "10");

  const skip: number = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Tiene que ser un número" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Tiene que ser un número" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json(
    {
      message: "List of Todo's",
      todos,
    },
    { status: 200 }
  );
}

const todoSchema = z.object({
  description: z.string(),
  complete: z.boolean().optional().default(false),
});

export async function POST(request: Request) {
  try {
    const { complete, description } = todoSchema.parse(await request.json());

    const user = await getUserSessionServer();

    if (!user) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const todo = await prisma.todo.create({
      data: { complete, description, userId: user.id },
    });

    return NextResponse.json({ message: "Todo creado", todo });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const deletedTodos = await prisma.todo.deleteMany({
      where: { complete: true },
    });

    return NextResponse.json({ message: "Todos eliminados", deletedTodos });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}
