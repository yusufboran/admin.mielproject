import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const ProjectItemPage = Loadable(lazy(() => import("./ProjectsPage")));
const ProjectAddPage = Loadable(lazy(() => import("./ProjectAddPage")));
const ProjectEditPage = Loadable(lazy(() => import("./ProjectEditPage")));

const projectRoutes = [
  { path: "/projects", element: <ProjectItemPage />, auth: authRoles.admin },
  {
    path: "/projects/add",
    element: <ProjectAddPage />,
    auth: authRoles.admin,
  },

  {
    path: "/projects/edit/:serviceID",
    element: <ProjectEditPage />,
    auth: authRoles.admin,
  },
];
export default projectRoutes;
