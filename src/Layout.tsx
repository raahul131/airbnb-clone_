import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Filter from "./components/filter/Filter";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Filter />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
