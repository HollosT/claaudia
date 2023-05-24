import platformRoutes from "src/services/router/platform-routes"
import { DetailsHeader } from "../details"
import SelectOption from "./SelectOption";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { useContext } from "react";
import { SelectHeader } from ".";
import HardwareContent from "./HardwareContent";


const Comparison: React.FC = () => {
    const { selectedHPC, comparedHPC } = useContext(ComparisonContext);

    return (
        <section className="comparison">
            <h2>{selectedHPC} - {comparedHPC}</h2>
            <DetailsHeader title="Compare two HPC systems" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" path={platformRoutes.strato.path} />
            <div className="comparison-select">
                <div className="comparison-select--title">
                    <h5>Select sytems to compare</h5>
                    <h5>Hardware specifications</h5>
                </div>
                <div className="comparison-select--container">
                    <div className="select">
                        <SelectOption /> 
                        <SelectHeader name={selectedHPC} />
                        <HardwareContent />

                    </div>
                    <div className="select">
                        <SelectOption compared /> 
                        <SelectHeader name={comparedHPC} />
                        <HardwareContent compared />
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Comparison;