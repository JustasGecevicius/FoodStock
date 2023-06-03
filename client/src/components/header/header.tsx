import StockCategoryItem from '../stockCategoryItem/StockCategoryItem'

export default function Header() {
  return (
    <div className="absolute top-0 flex flex-col w-screen h-20 bg-white rounded-b-md">
      <h4 className="w-screen text-center text-teal-900">Current Stock</h4>
      <div className="flex flex-row w-screen h-14 ">
        <StockCategoryItem category={'meat'} />
        <StockCategoryItem category={'grains'} />
        <StockCategoryItem category={'vegetables'} />
        <StockCategoryItem category={'drinks'} />
      </div>
    </div>
  )
}
