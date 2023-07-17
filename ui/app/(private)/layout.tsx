import { SignOutButton } from "@clerk/nextjs";
import type { ReactNode } from "react";

export default function MainPrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header>
        <SignOutButton />
      </header>
      <main>{children}</main>
    </>
  );
}
