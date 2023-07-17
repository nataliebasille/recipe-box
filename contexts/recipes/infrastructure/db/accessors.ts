import { db } from "./db";
import {
  type Recipe,
  type FindRecipeById,
  type RecipeVersion,
} from "../../domain";
import { some, none } from "~/contexts/shared";

type DbRecipe = Exclude<Awaited<ReturnType<typeof fetchFromDb>>, undefined>;

export const findRecipeById: FindRecipeById = async (id) => {
  const recipe = await fetchFromDb(id);

  return recipe ? some(mapRecipeToDomain(recipe)) : none();
};

function fetchFromDb(id: string) {
  return db.query.recipe.findFirst({
    where: (table, { eq }) => eq(table.id, id),
    with: {
      versions: true,
    },
  });
}

function mapRecipeToDomain(recipe: DbRecipe): Recipe {
  const versions = recipe.versions.map(mapVersionToDomain);
  return {
    id: recipe.id,
    owner: recipe.owner,
    versions,
  };
}

function mapVersionToDomain(
  version: DbRecipe["versions"][number]
): RecipeVersion {
  return {
    name: version.name,
    description: version.description ?? undefined,
    ingredients: [],
    instructions: [],
    published: version.published,
    publishedAt: version.publishedAt ?? undefined,
  };
}
