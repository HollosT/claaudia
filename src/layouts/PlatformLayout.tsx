import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const PlatformLayout: React.FC = () => {
    return (
        <main className="platform-page">
            <Navigation />
            <div className="page-wrapper">
                <Outlet />
            </div>
        </main>
    )
}

export default PlatformLayout;