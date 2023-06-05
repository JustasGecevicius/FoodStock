import { useState, useEffect } from 'react'
import house from '/src/assets/navigationImages/house.png'
import recipes from '/src/assets/navigationImages/recipes.png'
import settings from '/src/assets/navigationImages/settings.png'
import stock from '/src/assets/navigationImages/stock.png'
import { Link } from 'react-router-dom'

interface NavigationIconType {
  category: string
}

export default function NavigationIcon({ category }: NavigationIconType) {
  const [image, setImage] = useState('')
  const [link, setLink] = useState('')

  useEffect(() => {
    switch (category) {
      case 'home':
        setLink('main-page')
        setImage(house)
        break
      case 'stock':
        setLink('stock')
        setImage(stock)
        break
      case 'recipes':
        setLink('recipes')
        setImage(recipes)
        break
      case 'settings':
        setLink('settings')
        setImage(settings)
        break
    }
  }, [])

  return (
    <div className="flex items-center justify-center w-1/4 h-full">
      <Link to={`/${link}`} className="h-1/2 aspect-square">
        <img src={image} alt={category} className="h-full aspect-square" />
      </Link>
    </div>
  )
}
