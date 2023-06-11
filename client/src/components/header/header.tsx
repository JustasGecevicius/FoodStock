import StockCategoryItem from './stockCategoryItem/StockCategoryItem';

export default function Header() {
  return (
    <div className='flex flex-col w-screen bg-white h-fit rounded-b-md'>
      <h4 className='flex items-center justify-center w-screen h-8 text-center text-teal-900'>
        Current Stock
      </h4>
      <div className='flex flex-row w-screen h-fit'>
        <StockCategoryItem category={'meat'} />
        <StockCategoryItem category={'grains'} />
        <StockCategoryItem category={'vegetables'} />
        <StockCategoryItem category={'drinks'} />
      </div>
    </div>
  );
}
