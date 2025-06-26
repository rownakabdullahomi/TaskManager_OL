import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { Button } from "react-bootstrap";
// import "./MainLayout.css";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  // ✅ Watch screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true); // Always show on desktop
      } else {
        setIsSidebarOpen(false); // Hide on mobile
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-layout">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />

      <Button
        variant="light"
        className="toggle-btn d-md-none"
        onClick={toggleSidebar}
      >
        <i className="bi bi-list"></i>
      </Button>

      <div className={`content-area ${isSidebarOpen ? "with-sidebar" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
