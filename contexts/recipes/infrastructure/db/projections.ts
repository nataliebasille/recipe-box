import { eq, sql, and } from "drizzle-orm";
import {
  type GetPublishedRecipes,
  type PublishedRecipe,
} from "../../application/projections";
import { db } from "./db";
import { recipeVersion } from "./schema";

export const getPublishedRecipes: GetPublishedRecipes = async ({
  owner,
  limit,
} = {}) => {
  const publishedVersions = db
    .select({
      recipeId: recipeVersion.recipeId,
      maxPublishedAt: sql`max(${recipeVersion.publishedAt})`.as(
        "maxPublishedAt"
      ),
    })
    .from(recipeVersion)
    .groupBy(recipeVersion.recipeId)
    .as("publishedVersions");

  return (await db
    .select({
      id: recipeVersion.recipeId,
      name: recipeVersion.name,
      description: recipeVersion.description,
    })
    .from(recipeVersion)
    .innerJoin(
      publishedVersions,
      and(
        eq(publishedVersions.recipeId, recipeVersion.recipeId),
        eq(publishedVersions.maxPublishedAt, recipeVersion.publishedAt)
      )
    )) as PublishedRecipe[];
};
