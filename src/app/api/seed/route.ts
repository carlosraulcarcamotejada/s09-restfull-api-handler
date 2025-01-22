import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import {
  NextResponse,
  // NextRequest
} from "next/server";

import bcrypt from "bcryptjs";

export async function GET() {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const seedData = await prisma.user.create({
    data: {
      email: "test-user@gmail.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "Piedra del alma", complete: true },
          { description: "Piedra del poder" },
          { description: "Piedra del tiempo" },
          { description: "Piedra del espacio" },
          { description: "Piedra de la realidad" },
        ],
      },
    },
  });



  return NextResponse.json(
    {
      message: "¡Seed Executed!",
      seedData,
    },
    { status: 200 }
  );
}
