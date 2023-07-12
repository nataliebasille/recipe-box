import type { ReactNode } from "react";
import "~/styles/globals.css";

const MyApp = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MyApp;
