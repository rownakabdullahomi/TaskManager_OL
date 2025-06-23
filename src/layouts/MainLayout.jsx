
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";


const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <div style={{ marginLeft: "240px", padding: "1.5rem", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
