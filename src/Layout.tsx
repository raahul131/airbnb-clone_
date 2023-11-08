import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
