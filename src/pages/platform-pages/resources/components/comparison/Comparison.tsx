import platformRoutes from "src/services/router/platform-routes"
import { DetailsHeader } from "../details"
import SelectOption from "./SelectOption";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { useContext } from "react";
import { Application, SelectHeader, SelectUseCase } from ".";
import HardwareContent from "./HardwareContent";
import { Divider } from "src/atoms";


const Comparison: React.FC = () => {
    const { selectedHPC, comparedHPC } = useContext(ComparisonContext);

    return (
        <section className="comparison">
            <DetailsHeader title="Compare two HPC systems" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" path={platformRoutes.strato.path} />
            <div className="comparison-select">
                <div className="comparison-select--title">
                    <h4 className="comparison-select--title-item comparison-select--title-item_1">Select sytems to compare</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_2">Best use case</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_3">Getting access</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_4">Hardware specifications</h4>
                </div>
                <div className="comparison-select--container">
                    <div className="select">
                        <SelectOption /> 
                        <SelectHeader name={selectedHPC} />
                        <SelectUseCase/>
                        <Application />
                        <HardwareContent />

                    </div>
                    <div className="select">
                        <SelectOption compared /> 
                        <SelectHeader name={comparedHPC} />
                        <Divider />
                        <SelectUseCase compared />
                        <Application compared />


                        <HardwareContent compared />
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Comparison;