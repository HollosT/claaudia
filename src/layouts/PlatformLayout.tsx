import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import PageWrapper from "./PageWrapper";

const PlatformLayout: React.FC = () => {
    return (
        <div>
            <Navigation />
            <PageWrapper>
                <Outlet />
            </PageWrapper>
        </div>
    )
}

export default PlatformLayout;