import meat from '/src/assets/headerImages/meat.png';

export default function StockItem() {
  return (
    <div className='flex flex-row items-center h-8 px-2 my-2 gap-x-4'>
      <img src={meat} alt='Meat' className='h-full aspect-square' />
      <p className='text-teal-900 grow'>Chicken</p>
      <p className='text-teal-900 '>500G</p>
    </div>
  );
}
