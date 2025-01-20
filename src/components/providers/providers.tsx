"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as ToasterSonner } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";

function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <Toaster />
      <ToasterSonner />
      <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  );
}

export { Providers };
