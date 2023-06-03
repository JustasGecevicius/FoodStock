import { Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainPage from "./pages/MainPage";

export default function AllRoutes() {
  const location = useLocation();

  return (
    <div className="w-screen h-screen ">
      <Routes location={location} key={location.pathname}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </div>
  );
}
