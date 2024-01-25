import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import useAuth from "../Hooks/useAuth";

const MainLayout = () => {
  const { darkMode } = useAuth();
  return (
    <div className={`${darkMode ? "dark:bg-[#1e293b] text-white" : "text-black"}`}>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
