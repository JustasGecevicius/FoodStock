import { useEffect, useState } from 'react'
import meat from '/src/assets/headerImages/meat.png'
import grains from '/src/assets/headerImages/grains.png'
import vegetables from '/src/assets/headerImages/vegetables.png'
import drinks from '/src/assets/headerImages/drinks.png'

interface StockCategoryItemTypes {
  category: string
}

export default function StockCategoryItem({
  category,
}: StockCategoryItemTypes) {
  const [currentStock, setCurrentStock] = useState(0)
  const [imageSource, setImageSource] = useState('')

  useEffect(() => {
    switch (category) {
      case 'meat':
        setCurrentStock(500)
        setImageSource(meat)
        break
      case 'grains':
        setCurrentStock(300)
        setImageSource(grains)
        break
      case 'vegetables':
        setCurrentStock(600)
        setImageSource(vegetables)
        break
      case 'drinks':
        setCurrentStock(100)
        setImageSource(drinks)
        break
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-1/4 h-full gap-y-1">
      <img src={imageSource} alt={category} className="aspect-square h-2/3" />
      <p className="text-teal-900 h-1/3">{currentStock}G</p>
    </div>
  )
}
