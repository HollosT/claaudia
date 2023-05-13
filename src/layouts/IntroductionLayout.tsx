import { Outlet } from "react-router-dom";

const IntorductionLayout: React.FC = () => {
    return (
        <main className="introduction-page">
            <Outlet />
        </main>
    )
}

export default IntorductionLayout;