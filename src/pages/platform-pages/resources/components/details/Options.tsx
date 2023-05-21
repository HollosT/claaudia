import { HPCType } from "src/services/types/hpc/hpc";
import OptionItem from "./OptionItem";

const Options: React.FC<{hpcs: HPCType[]}> = ({hpcs}) => {

    return (
        <section className="resources-options">
           <h4>Available options within Strato</h4>
           <div className="resources-options-container">
            {hpcs.map(hpc => (
                    <OptionItem key={hpc.id} hpc={hpc} />
            ))}
            </div> 

        </section>
    )
}

export default Options;