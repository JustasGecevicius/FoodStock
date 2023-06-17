import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IngredientType {
  name: string;
  calories: number;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://192.168.1.13:3000/api',
    credentials: 'include',
  }),
  tagTypes: ['Ingredients'],
  endpoints: (builder) => ({
    createIngredient: builder.mutation<IngredientType, Partial<IngredientType>>(
      {
        query: (body) => ({
          url: 'ingredient/create',
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Ingredients'],
      }
    ),
  }),
});

export const { useCreateIngredientMutation } = apiSlice;
