import StockCategoryItem from './stockCategoryItem/StockCategoryItem'

export default function Header() {
  return (
    <div className="flex flex-col w-screen h-24 bg-white rounded-b-md gap-y-2">
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
