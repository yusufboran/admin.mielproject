import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AboutMePage = Loadable(lazy(() => import("./AboutMePage")));

const aboutMeRoutes = [{ path: "/about-me", element: <AboutMePage /> }];

export default aboutMeRoutes;
