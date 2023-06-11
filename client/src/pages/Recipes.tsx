import Navigation from '../components/navigation/Navigation';
import RecipeItem from '../components/recipesOverview/recipeItem/RecipeItem';

export default function Recipes() {
  return (
    <div className='flex flex-col w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
      <div className='flex flex-col items-center bg-white grow'>
        <h2 className='w-screen text-lg text-center text-teal-900'>Recipes</h2>
        <div className='grow'>
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
          <RecipeItem />
        </div>
        <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
          More
        </button>
      </div>
      <Navigation />
    </div>
  );
}
