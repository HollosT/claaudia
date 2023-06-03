import { Logo } from "src/atoms";
import { Link, useLocation } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";
import { SidebarWave } from "./icons";

const Navigation: React.FC = () => {
  const location = useLocation();
  const isQuiz = localStorage.getItem("isQuiz")

  const isRouteActive = (routePath: string): boolean => {
    if (isQuiz && routePath === platformRoutes.matchmaking.path) {
      return location.pathname === platformRoutes.quiz.path
    }

    if (routePath === platformRoutes.resources.path) {
      return  location.pathname === platformRoutes.resources.path || 
              location.pathname === platformRoutes.aicloud.path || 
              location.pathname ===   platformRoutes.strato.path || 
              location.pathname ===   platformRoutes.ucloud.path || 
              location.pathname ===   platformRoutes.localmachine.path ||
              location.pathname ===   platformRoutes.comparison.path
         
    }
    return location.pathname === routePath;
  };


  return (
    <nav className="sidebar">
        <Logo />
      <ul className="sidebar-list u-margin-top-small">
        {Object.values(platformRoutes).map((route) => (
          route.show === false ?
          null
          :
          (route.path === platformRoutes.matchmaking.path ?
            <Link
              className={`sidebar-list--link ${isRouteActive(route.path) ? "active-link" : ""}`}
              key={route.name}
              to={isQuiz ? platformRoutes.quiz.path : route.path}
            >
              {route.icon}
              {route.name}
            </Link>
            :
            <Link
              className={`sidebar-list--link ${isRouteActive(route.path) ? "active-link" : ""}`}
              key={route.name}
              to={route.path}
            >
              {route.icon}
              {route.name}
            </Link>
          )
        ))}
      </ul>
      {/* <div className="contact">
        <ContactIcon />    
        <a className="contact-address" href="mailto: aau@aau.dk">Contact CLAAUDIA</a>
      </div> */}
      <div className="sidebar-wave">
        <SidebarWave />
      </div>
    </nav>
  );
};

export default Navigation;