import Home from "../components/pages/Home";
import Skills from "../components/pages/Skills";
import Projects from "../components/pages/Projects";
import IRoute from "../interfaces/IRoute";

const Routes: IRoute[] = [
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/",
    name: "Overview",
    component: Home,
  },
];

export default Routes;
