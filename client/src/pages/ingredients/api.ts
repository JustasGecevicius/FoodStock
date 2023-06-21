import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MacrosType } from './createIngredient';

export interface IngredientType {
  name: string;
  calories: number | undefined;
  macros: MacrosType;
  image: File | null;
  _id: string;
}

interface AllIngredientResponseType {
  ingredients: IngredientType[];
  message: string;
}

interface RecipeType {
  name: string;
  totalCalories: number | null;
  comments: string;
  steps: { value: string }[];
  recipeIngredients: string[];
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://192.168.1.13:3000/api',
    credentials: 'include',
  }),
  tagTypes: ['Ingredients'],
  endpoints: (builder) => ({
    createIngredient: builder.mutation<IngredientType, Partial<FormData>>({
      query: (body) => {
        return {
          url: 'ingredient/create',
          method: 'POST',
          body,
          formData: true,
        };
      },
      invalidatesTags: ['Ingredients'],
    }),
    createRecipe: builder.mutation<RecipeType, Partial<RecipeType>>({
      query: (body) => {
        return {
          url: 'recipe/create',
          method: 'POST',
          body,
        };
      },
    }),
    getIngredients: builder.query<
      { label: string; value: IngredientType }[],
      void
    >({
      query() {
        return 'ingredient/all';
      },
      transformResponse: (repsonseData: AllIngredientResponseType) =>
        repsonseData.ingredients.map((elem) => ({
          label: elem.name,
          value: elem,
        })),
    }),
  }),
});

// apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     ,
//   }),
// });

export const {
  useCreateIngredientMutation,
  useCreateRecipeMutation,
  useGetIngredientsQuery,
} = apiSlice;
