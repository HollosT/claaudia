import { Logo, SideBarBottomWave } from "src/atoms";
import { Link, useLocation } from "react-router-dom";
import platformRoutes from "src/services/router/platform-routes";
import { ContactIcon } from "./icons";

const Navigation: React.FC = () => {
  const location = useLocation();

  const isRouteActive = (routePath: string): boolean => {
    return location.pathname === routePath;
  };

  return (
    <nav className="sidebar">
      <Link to={platformRoutes.home.path}>
        <Logo />
      </Link>
      <ul className="sidebar-list u-margin-top-small">
        {Object.values(platformRoutes).map((route) => (
          route.show === false ?
          null
          :
          <Link
            className={`sidebar-list--link ${isRouteActive(route.path) ? "active-link" : ""}`}
            key={route.name}
            to={route.path}
          >
            {route.icon}
            {route.name}
          </Link>
        ))}
      </ul>
      <div className="contact">
        <ContactIcon />    
        <a className="contact-address" href="mailto: aau@aau.dk">Contact CLAAUDIA</a>
      </div>
      {/* <SideBarBottomWave /> */}
    </nav>
  );
};

export default Navigation;