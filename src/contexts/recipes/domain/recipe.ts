import { type UserId } from "~/contexts/shared";
import { type RecipeVersion } from "./recipeVersion";

export type RecipeId = string & { readonly __brand?: "Recipe" };

export type Recipe = {
  readonly id: RecipeId;
  readonly owner: UserId;
  readonly versions: RecipeVersion[];
  readonly publishedVersion?: RecipeVersion & {
    publishedAt: Date;
    published: true;
  };
};
