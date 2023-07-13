import { SignOutButton } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe box",
};

export default function Home() {
  return (
    <main>
      <SignOutButton />
      <h1 className="text-5xl">Recipe box</h1>
    </main>
  );
}
