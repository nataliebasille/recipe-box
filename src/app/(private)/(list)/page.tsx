import type { Metadata } from "next";
import Link from "next/link";
import { listPublishedRecipes } from "~/contexts/recipes/application/queries";
import { di } from "~/contexts/recipes/infrastructure/di";

export const metadata: Metadata = {
  title: "Recipe box",
};

export default async function RecipesListPage() {
  const list = await di(listPublishedRecipes)({});
  return (
    <>
      <Link href="/edit">Create new</Link>
      {list.length === 0
        ? "No recipes yet"
        : list.map((recipe) => (
            <div key={recipe.id}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
    </>
  );
}
