import { Link } from "react-router-dom"
import platformRoutes from "../../services/router/platform-routes";
const Navigation: React.FC = () => {
    return (
            <nav>
                <h2>Nav</h2>
                <ul>
                    {Object.values(platformRoutes).map((route) => 
                         <Link key={route.name} to={route.path}>{route.name}</Link>
                    )}
                </ul>
            </nav>
    )
}
export default Navigation;