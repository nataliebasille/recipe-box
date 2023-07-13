import { ClerkProvider } from "@clerk/nextjs";
import type { ReactNode } from "react";
import "~/styles/globals.css";

const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <ClerkProvider>
      <html>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default MyApp;
