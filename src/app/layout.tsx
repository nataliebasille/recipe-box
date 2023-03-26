"use client";

import { ThemeProvider, useTheme } from "~/stores/themeStore";
import "../styles/globals.css";
import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  return (
    <html data-theme={theme}>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}
