import { Link } from 'react-router-dom';
import settings from '/src/assets/navigationImages/settings.png';

export default function RecipeItem() {
  return (
    <div className='flex flex-row items-center w-screen h-8 px-2 my-2 gap-x-4'>
      <img src='#' alt='Meat' className='h-full aspect-square' />
      <p className='text-teal-900 grow'>Recipe Name</p>
      <Link to={'/recipe/ID'} className='h-1/2 aspect-square'>
        <img src={settings} alt={'settings'} className='h-full aspect-square' />
      </Link>
    </div>
  );
}
