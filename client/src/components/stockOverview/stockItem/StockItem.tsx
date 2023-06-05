import meat from '/src/assets/headerImages/meat.png'

export default function StockItem() {
  return (
    <div className="flex flex-row w-screen h-8 my-2">
      <img src={meat} alt="Meat" className="h-full mx-4 aspect-square" />
      <div className="flex flex-row items-center">
        <p className="text-teal-900 w-60 line">Chicken</p>
        <p className="w-10 text-teal-900">500G</p>
      </div>
    </div>
  )
}
