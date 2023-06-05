import { Routes, Route, useLocation } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import MainPage from './pages/MainPage'
import Stock from './pages/Stock'
import Recipes from './pages/Recipes'
import Settings from './pages/Settings'

export default function AllRoutes() {
  const location = useLocation()

  return (
    <div className="w-screen h-screen ">
      <Routes location={location} key={location.pathname}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/main-page" element={<MainPage />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}
