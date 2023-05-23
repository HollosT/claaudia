import platformRoutes from "src/services/router/platform-routes"
import { DetailsHeader } from "../details"
import SelectOption from "./SelectOption";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { useContext } from "react";


const Comparison: React.FC = () => {
    const { selectedHPC } = useContext(ComparisonContext);

    return (
        <section className="comparison">
            <h2>{selectedHPC}</h2>
            <DetailsHeader title="Compare two HPC systems" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" path={platformRoutes.strato.path} />
            <div className="comparison-select">
                <h5>Select sytems to compare</h5>
                <SelectOption /> 
                <SelectOption compared /> 
               
            </div>
        </section>
    )
}

export default Comparison;