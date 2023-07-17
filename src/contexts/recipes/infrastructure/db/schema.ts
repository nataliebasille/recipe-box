import { relations, sql } from "drizzle-orm";
import {
  char,
  varchar,
  mysqlTable,
  text,
  datetime,
  index,
  boolean,
  timestamp,
} from "drizzle-orm/mysql-core";

export const recipe = mysqlTable("recipe", {
  id: char("id", { length: 32 }).primaryKey(),
  owner: text("owner").notNull(),
  createdAt: datetime("createdAt")
    .notNull()
    .default(sql`now()`),
});

export const recipeVersion = mysqlTable(
  "recipe_version",
  {
    versionId: char("versionId", { length: 32 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    createdAt: datetime("createdAt")
      .notNull()
      .default(sql`now()`),
    recipeId: char("recipeId", { length: 32 }).notNull(),
    published: boolean("published").notNull().default(false),
    publishedAt: timestamp("publishedAt"),
  },
  (table) => ({
    recipeIdIndex: index("recipe_id_idx").on(table.recipeId),
  })
);

export const recipeRelations = relations(recipe, ({ many }) => ({
  versions: many(recipeVersion),
}));

export const recipeVersionRelations = relations(recipeVersion, ({ one }) => ({
  recipe: one(recipe, {
    fields: [recipeVersion.recipeId],
    references: [recipe.id],
  }),
}));
