import { Outlet } from "react-router-dom";
import { BottomWave, TopWave } from "src/atoms";

const IntorductionLayout: React.FC = () => {
    return (
        <main className="introduction-page">
            <TopWave />
            <Outlet />
            <BottomWave />
        </main>
    )
}

export default IntorductionLayout;