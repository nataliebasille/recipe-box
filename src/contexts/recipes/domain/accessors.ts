import { type AddEntity, type FindEntityById } from "~/contexts/shared";
import { type RecipeId, type Recipe } from "./recipe";

export type FindRecipeById = FindEntityById<RecipeId, Recipe>;
export type AddRecipe = AddEntity<Recipe>;
