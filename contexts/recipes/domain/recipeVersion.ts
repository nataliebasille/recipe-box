import { type Ingredient } from "./ingredient";
import { type Instruction } from "./instruction";

export type RecipeVersion = {
  readonly name: string;
  readonly description?: string;
  readonly ingredients: Ingredient[];
  readonly instructions: Instruction[];
  readonly published: boolean;
  readonly publishedAt?: Date;
};
