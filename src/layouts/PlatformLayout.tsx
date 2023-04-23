import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";


const PlatformLayout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}

export default PlatformLayout;