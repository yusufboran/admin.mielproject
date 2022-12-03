import { authRoles } from "app/auth/authRoles";
import Loadable from "app/components/Loadable";
import { lazy } from "react";

const ConsultantsPage = Loadable(lazy(() => import("./ConsultantsPage")));
const ConsultantsAddPage = Loadable(lazy(() => import("./ConsultantsAddPage")));

const consultantsRoute = [
  { path: "/consultants", element: <ConsultantsPage />, auth: authRoles.admin },
  {
    path: "/consultants/add",
    element: <ConsultantsAddPage />,
    auth: authRoles.admin,
  },
];
export default consultantsRoute;
