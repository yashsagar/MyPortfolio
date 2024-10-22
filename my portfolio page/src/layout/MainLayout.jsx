import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const MainLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="grow-0 shrink-0">
        <Navbar />
        <Outlet />
      </main>
      <footer className="grow-0 shrink-0 border-t-2 border-gray-600/50">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
