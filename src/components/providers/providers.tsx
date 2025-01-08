"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function Providers({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export { Providers };
