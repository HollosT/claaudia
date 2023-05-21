import { Link } from "react-router-dom";
import { HPCType } from "src/services/types/hpc/hpc";
import HardwareSpec from "./HardwareSpec";
import Resource from "./Resource";
import OptionData from "./OptionData";
import Integration from "./Integration";
import Skills from "./Skills";

const OptionItem: React.FC<{hpc: HPCType}> = ({hpc}) => {

    return (
        <div className="option">
           <h2>{hpc.name}</h2>
           <p>{hpc.intro}</p>
           <Link to='/'>Compare with other system</Link>
            <HardwareSpec data={hpc.hardware_spec} />
            <Resource data={hpc.resource_availability} />
            <OptionData data={hpc.data} />
            <Integration data={hpc.integrations} />
            <Skills data={hpc.skill} />
        </div>
    )
}

export default OptionItem;