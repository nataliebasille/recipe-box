import { type Instruction, type Ingredient } from "../domain";

export type PublishedRecipe = {
  id: string;
  name: string;
  description?: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

export type GetPublishedRecipes = (where: {
  owner?: string;
  limit?: number;
}) => Promise<PublishedRecipe[]>;
