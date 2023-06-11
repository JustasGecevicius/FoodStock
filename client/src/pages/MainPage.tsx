import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import RecipesOverviewField from '../components/recipesOverview/RecipesOverviewField';
import StockOverviewField from '../components/stockOverview/StockOverviewField';

export default function MainPage() {
  return (
    <div className='flex flex-col w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5'>
      <Header />
      <StockOverviewField />
      <RecipesOverviewField />
      <Navigation />
    </div>
  );
}
