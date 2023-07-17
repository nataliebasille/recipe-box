import { SignOutButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";
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
