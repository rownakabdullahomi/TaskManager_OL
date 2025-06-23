// src/components/Sidebar/Sidebar.jsx
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "bi bi-cart-fill" },
    { name: "Create Task", path: "/create-task", icon: "bi bi-plus-circle-fill" },
    { name: "Update Task", path: "/update-task", icon: "bi bi-pencil-fill" },
    { name: "All Task", path: "/all-task", icon: "bi bi-list-check" },
    { name: "Create Project", path: "/create-project", icon: "bi bi-folder-plus" },
    { name: "Update Project", path: "/update-project", icon: "bi bi-folder-fill" },
    { name: "All Project", path: "/all-project", icon: "bi bi-folder2-open" },
    { name: "Update Profile", path: "/update-profile", icon: "bi bi-person-fill-gear" },
  ];

  return (
    <div className={`sidebar ${isOpen ? "show" : ""}`}>
      <div className="d-flex align-items-center gap-2 mb-5 ps-2">
        <div className="avatar-circle">G</div>
        <h6 className="brand-title mb-0">Task Manager</h6>
      </div>
      <div className="px-3">
        <p className="text-uppercase small text-muted mb-3">Menu</p>
        <Nav className="flex-column gap-2">
          {menuItems.map((item, idx) => (
            <Nav.Item key={idx}>
              <Link
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    closeSidebar?.(); // Close sidebar on small screen
                  }
                }}
              >
                <i className={`${item.icon} me-2`}></i> {item.name}
              </Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
