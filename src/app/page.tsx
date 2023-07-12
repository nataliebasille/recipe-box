import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipe box",
};

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">Recipe box</h1>
    </main>
  );
}
