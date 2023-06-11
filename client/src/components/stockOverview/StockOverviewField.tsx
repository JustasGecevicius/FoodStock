import StockItem from './stockItem/StockItem';

export default function StockOverviewField() {
  return (
    <div className='flex flex-col items-center w-screen overflow-y-auto bg-white rounded-md grow basis-0'>
      <h3 className='w-screen text-center text-teal-900'>Stock</h3>
      <div className='flex flex-col w-screen h-full overflow-y-auto'>
        <StockItem />
        <StockItem />
        <StockItem />
        <StockItem />
      </div>
      <button className='w-20 p-0 text-teal-900 bg-transparent focus:border-transparent active:border-transparent focus:bg-transparent active:bg-transparent focus:ring-transparent active:ring-transparent'>
        More
      </button>
    </div>
  );
}
