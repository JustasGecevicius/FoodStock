import NavigationIcon from './NavigationIcon'

export default function Navigation() {
  return (
    <div className="absolute bottom-0 flex flex-row w-screen h-16 bg-white">
      <NavigationIcon category="home" />
      <NavigationIcon category="stock" />
      <NavigationIcon category="recipes" />
      <NavigationIcon category="settings" />
    </div>
  )
}
