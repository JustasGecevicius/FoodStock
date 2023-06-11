import NavigationIcon from './NavigationIcon';

export default function Navigation() {
  return (
    <div className='flex flex-row w-screen h-12 bg-white'>
      <NavigationIcon category='home' />
      <NavigationIcon category='stock' />
      <NavigationIcon category='recipes' />
      <NavigationIcon category='settings' />
    </div>
  );
}
