"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

interface userCredentials {
  email: string;
  password: string;
}

export const signEmailPassword = async (userCredentials: userCredentials) => {
  const { email, password } = userCredentials;

  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = await createUser(userCredentials);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user?.password ?? "no-password")) {
    return null;
  }

  return user;
};

const createUser = async (userCredentials: userCredentials) => {
  const { email, password } = userCredentials;

  const user = await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0],
    },
  });

  return user;
};

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
