import Loadable from 'app/components/Loadable';
import { lazy } from 'react';

const ProfilePage = Loadable(lazy(() => import('./ProfilePage')));

const profileRoutes = [
  { path: '/user-profile', element: <ProfilePage /> },
];

export default profileRoutes;
