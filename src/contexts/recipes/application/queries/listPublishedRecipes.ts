import { type GetPublishedRecipes } from "../projections";

export const listPublishedRecipes =
  (deps: { getPublishedRecipes: GetPublishedRecipes }) =>
  async (...args: Parameters<GetPublishedRecipes>) => {
    return deps.getPublishedRecipes(...args);
  };
