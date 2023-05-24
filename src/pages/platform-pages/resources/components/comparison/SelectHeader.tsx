import { useContext } from "react";
import { Link } from "react-router-dom";
import { Divider } from "src/atoms";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import platformRoutes from "src/services/router/platform-routes";
import { SystemType } from "src/services/types/hpc/hpc";

const SelectHeader: React.FC<{ name: string | boolean }> = ({ name }) => {
    const { allHPC } = useContext(ComparisonContext);
    const hpc = allHPC.find(h => h.name === name);

    const handleType = (): { label: string, nav: string } => {
        if (hpc) {
            switch (hpc.type) {
                case SystemType.AICloud:
                    return {
                        label: "AI Cloud",
                        nav: platformRoutes.aicloud.path
                    }
                case SystemType.Strato:
                    return {
                        label: "Strato",
                        nav: platformRoutes.strato.path
                    }
                case SystemType.LocalMachine:
                    return {
                        label: "Local Machine",
                        nav: platformRoutes.strato.path
                    }
                case SystemType.UCloud:
                    return {
                        label: "UCloud",
                        nav: platformRoutes.strato.path
                    }
            }
        } else {
            return {
                label: "",
                nav: ""
            };
        }
    }


    return (
        <>
            {hpc ?
                <div className="select-header">
                    <h2 className="select-header--title">{hpc.name}</h2>
                    <p className="select-header--intro">{hpc.intro}</p>
                    <div className="select-header--nav">
                        <Link to="/">View use cases</Link>
                        <Link to={handleType().nav}>Go to {handleType().label} page</Link>
                        <Divider />
                    </div>

                </div>
                :
                null
            }
        </>
    )
}

export default SelectHeader;