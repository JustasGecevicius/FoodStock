import { Link } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import Item from '../../components/recipesOverview/recipeItem/RecipeItem';

export default function RecipesAndIngredients() {
  return (
    <div className='flex flex-col w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
      <div className='flex flex-col items-center bg-white basis-0 grow'>
        <h2 className='w-screen text-lg text-center text-teal-900'>Recipes</h2>
        <div className='grow'>
          <Item direction='recipe' />
          <Item direction='recipe' />
          <Item direction='recipe' />
          <Item direction='recipe' />
        </div>
        <div className='flex flex-row gap-y-4'>
          <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
            More
          </button>
          <Link to='/recipe/create'>
            <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
              Create
            </button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-center bg-white grow basis-0'>
        <h2 className='w-screen text-lg text-center text-teal-900'>
          Ingredients
        </h2>
        <div className='grow'>
          <Item direction='recipe' />
          <Item direction='recipe' />
          <Item direction='recipe' />
          <Item direction='recipe' />
        </div>
        <div className='flex flex-row gap-y-4'>
          <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
            More
          </button>
          <Link to='/ingredient/create'>
            <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
              Create
            </button>
          </Link>
        </div>
      </div>
      <Navigation />
    </div>
  );
}
