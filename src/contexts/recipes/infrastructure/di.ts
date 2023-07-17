import { createContainer } from "~/core/di";
import { accessors, projections } from "./db";

export const di = createContainer({
  clock: () => Date.now(),
  ...accessors,
  ...projections,
});
