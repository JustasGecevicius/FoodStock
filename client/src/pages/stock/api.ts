import { useState } from 'react';
import baseAxios from '../../api/baseAxios';

export const useAllIngredients = async () => {
  const [ingredients, setIngredients] = useState();

  const fetchedngredients = await baseAxios.get('/api/ingredient/all');
  console.log(fetchedngredients);

  return ingredients;
};
