import AuthGuard from "app/auth/AuthGuard";
import chartsRoute from "app/views/charts/ChartsRoute";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import projectRoutes from "./views/project/ProjectRoutes";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import NotFound from "app/views/sessions/NotFound";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import MatxLayout from "./components/MatxLayout/MatxLayout";

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...chartsRoute,
      ...projectRoutes,
      ...materialRoutes,
    ],
  },
  ...sessionRoutes,
  { path: "/", element: <Navigate to="home" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
