import Loadable from 'app/components/Loadable';
import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Analytics = Loadable(lazy(() => import('./Dashboard')));

const dashboardRoutes = [
  { path: '/home', element: <Analytics />, auth: authRoles.admin },
];

export default dashboardRoutes;
