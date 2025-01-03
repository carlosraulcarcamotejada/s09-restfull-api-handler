import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const todos = await prisma.todo.findMany();

  return NextResponse.json(
    {
      message: "List Of Todo's",
      todos,
    },
    { status: 200 }
  );
}
