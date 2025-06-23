import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateTask from "../pages/CreateTask/CreateTask";
import AllTask from "../pages/AllTask/AllTask";
import CreateProject from "../pages/CreateProject/CreateProject";
import UpdateProject from "../pages/UpdateProject/UpdateProject";
import AllProject from "../pages/AllProject/AllProject";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/create-task", element: <CreateTask /> },
      { path: "/update-task", element: <UpdateTask /> },
      { path: "/all-task", element: <AllTask /> },
      { path: "/create-project", element: <CreateProject /> },
      { path: "/update-project", element: <UpdateProject /> },
      { path: "/all-project", element: <AllProject /> },
       { path: "/update-profile", element: <UpdateProfile /> },
    ],
  },
]);

export default router;
