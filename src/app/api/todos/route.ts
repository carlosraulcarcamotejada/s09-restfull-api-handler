import { NextResponse, 
  // NextRequest 
} from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";


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
    const body = todoSchema.parse(await request.json());

    const todo = await prisma.todo.create({ data: body });

    return NextResponse.json({ message: "Todo creado", todo });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
}


