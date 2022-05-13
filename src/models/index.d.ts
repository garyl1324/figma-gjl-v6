import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recipe {
  readonly id: string;
  readonly rName?: string | null;
  readonly rDesc?: string | null;
  readonly rRating?: string | null;
  readonly rPrice?: string | null;
  readonly rUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}