import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse, 
  // NextRequest
 } from "next/server";

export async function GET(
  // request: Request
) {
  await prisma.todo.deleteMany();

  // Define la constante tipada para los datos
  const seedData: Prisma.TodoCreateManyInput[] = [
    { description: "Piedra del alma", complete: true },
    { description: "Piedra del poder" },
    { description: "Piedra del tiempo" },
    { description: "Piedra del espacio" },
    { description: "Piedra de la realidad" },
  ];

  const todos = await prisma.todo.createMany({
    data: seedData,
  });

  return NextResponse.json(
    {
      message: "¡Seed Executed!",
      todos,
    },
    { status: 200 }
  );
}
