import Home from "../components/pages/Home";
import Skills from "../components/pages/Skills";
import Projects from "../components/pages/Projects";
import IRoute from "../interfaces/IRoute";

const Routes: IRoute[] = [
  {
    path: "/",
    name: "Overview",
    component: Home,
    exact: true,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
    exact: true,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    exact: true,
  },
];

export default Routes;
