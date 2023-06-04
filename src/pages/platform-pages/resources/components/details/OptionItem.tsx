import {useNavigate } from "react-router-dom";
import { HPCType } from "src/services/types/hpc/hpc";
import HardwareSpec from "./HardwareSpec";
import Resource from "./Resource";
import OptionData from "./OptionData";
import Integration from "./Integration";
import Skills from "./Skills";
import { ComparisonIcon } from "../svg";
import { Button, Loading } from "src/atoms";
import { useContext } from "react";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import platformRoutes from "src/services/router/platform-routes";

const OptionItem: React.FC<{hpc: HPCType}> = ({hpc}) => {
    const {handleSelectedHPC} = useContext(ComparisonContext);
    const navigate = useNavigate();

    if(!hpc) {
        return <Loading />
    }

    const handleNav = () => {
        handleSelectedHPC(hpc.name)
        navigate(platformRoutes.comparison.path)
    }

    return (
        <div className="option">
           <h2 className="option-title">{hpc.name}</h2>
           <p className="option-body">{hpc.intro}</p>
           <Button className="option-nav" onClick={handleNav}>
            <ComparisonIcon />
            Compare with other system
            </Button>
            <HardwareSpec data={hpc.hardware_spec} currHpc={hpc.name} />
            <Resource data={hpc.resource_availability} />
            <OptionData data={hpc.data} />
            <Integration data={hpc.integrations} />
            <Skills data={hpc.skill} currHpc={hpc.name} />
        </div>
    )
}

export default OptionItem;