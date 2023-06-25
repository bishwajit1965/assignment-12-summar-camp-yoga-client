import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/shared/header/Header";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navBar/NavBar";

const Main = () => {
  const location = useLocation();
  const includeHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("signUp") ||
    location.pathname.includes("classes") ||
    location.pathname.includes("instructors") ||
    location.pathname.includes("dashboard");
  return (
    <div>
      {includeHeaderFooter && <NavBar />}
      <Outlet />
      {includeHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
