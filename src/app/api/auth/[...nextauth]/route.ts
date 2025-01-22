import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { signEmailPassword } from "@/actions/auth/auth-actions";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Correo electrónico",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "Contraseña",
          type: "password",
          placeholder: "****",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const user = await signEmailPassword({
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        }
        // If you return null then an error will be displayed advising the user to check their details.
        return null;
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
    // ...add more providers here
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({}) {
      return true;
    },

    async jwt({ token }) {
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email ?? "no-email" },
      });

      if (dbUser?.isActive === false) {
        throw Error("Usuario no está activo");
      }

      token.roles = dbUser?.roles ?? ["no-roles"];
      token.id = dbUser?.id ?? "no-id";

      return token;
    },

    async session({ session, token }) {
      if (session && session.user) {
        session.user.roles = token?.roles ?? ["no-roles"];
        session.user.id = token?.id ?? "no-id";
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
