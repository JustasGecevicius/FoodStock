import { Routes, Route, useLocation } from 'react-router-dom';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';
import MainPage from './pages/mainPage/MainPage';
import Stock from './pages/stock/Stock';
import RecipesAndIngredients from './pages/recipesAndIngredients/RecipesAndIngredients';
import Settings from './pages/settings/Settings';
import Ingredients from './pages/ingredients/Ingredients';
import CreateIngredient from './pages/ingredients/createIngredient';
import CreateRecipe from './pages/recipes/createRecipe';

export default function AllRoutes() {
  const location = useLocation();

  return (
    <div className='w-screen h-screen '>
      <Routes location={location} key={location.pathname}>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/main-page' element={<MainPage />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/recipes' element={<RecipesAndIngredients />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/ingredients' element={<Ingredients />} />
        <Route path='/ingredient/create' element={<CreateIngredient />}></Route>
        <Route path='/recipe/create' element={<CreateRecipe />}></Route>
      </Routes>
    </div>
  );
}
