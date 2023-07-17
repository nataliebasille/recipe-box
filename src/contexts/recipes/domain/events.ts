import { ok, type DomainResult, type UserId } from "~/contexts/shared";
import { type Recipe, type RecipeId } from "./recipe";
import { type Ingredient } from "./ingredient";
import { type RecipeVersion } from "./recipeVersion";

export function create(
  generateId: () => RecipeId,
  event: {
    owner: UserId;
    name: string;
    description?: string;
    ingredients: Ingredient[];
    instructions: string[];
  }
): DomainResult<Recipe> {
  const version: RecipeVersion = {
    name: event.name,
    description: event.description,
    ingredients: event.ingredients,
    instructions: event.instructions,
    published: false,
  };
  const recipe: Recipe = {
    id: generateId(),
    owner: event.owner,
    versions: [version],
  };
  return ok(recipe);
}

export function update(
  prev: Recipe,
  event: {
    name: string;
    description?: string;
    ingredients: Ingredient[];
    instructions: string[];
  }
): DomainResult<Recipe> {
  const version: RecipeVersion = {
    name: event.name,
    description: event.description,
    ingredients: event.ingredients,
    instructions: event.instructions,
    published: false,
    publishedAt: undefined,
  };
  const recipe: Recipe = {
    ...prev,
    versions: [...prev.versions, version],
  };
  return ok(recipe);
}

export function publish(prev: Recipe): DomainResult<Recipe> {
  return ok({
    ...prev,
    isDraft: false,
  });
}
