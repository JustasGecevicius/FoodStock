import { Link } from 'react-router-dom';
import StockItem from '../stockOverview/stockItem/StockItem';

export default function RecipesOverviewField() {
  return (
    <div className='flex flex-col items-center w-screen overflow-y-auto bg-white rounded-md grow basis-0'>
      <h3 className='w-screen text-center text-teal-900'>Recipes</h3>
      <div className='flex flex-col w-screen h-full overflow-y-auto'>
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
      </div>
      <Link to='/recipes'>
        <button className='w-20 p-0 text-teal-900 bg-transparent'>More</button>
      </Link>
    </div>
  );
}
