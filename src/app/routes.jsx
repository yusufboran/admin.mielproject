import AuthGuard from "app/auth/AuthGuard";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import projectRoutes from "./views/project/ProjectRoutes";
import NotFound from "app/views/sessions/NotFound";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import consultantsRoute from "./views/consultants/ConsultantsRoutes";
import profileRoutes from "./views/profile/ProfileRoutes";

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...projectRoutes,
      ...consultantsRoute,
      ...profileRoutes,
    ],
  },
  ...sessionRoutes,
  { path: "/", element: <Navigate to="home" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
