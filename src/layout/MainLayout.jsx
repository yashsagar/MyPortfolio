import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
const MainLayout = () => {
  return (
    <div className="bg-bg-primary text-primary min-h-screen ">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
