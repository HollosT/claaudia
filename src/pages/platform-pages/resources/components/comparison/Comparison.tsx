import platformRoutes from "src/services/router/platform-routes"
import { DetailsHeader } from "../details"
import SelectOption from "./SelectOption";
import { ComparisonContext } from "src/services/context/comparison/comparison-context";
import { useContext } from "react";
import { Application, SelectData, SelectHeader, SelectIntegration, SelectSkill, SelectUseCase } from ".";
import HardwareContent from "./HardwareContent";
import SelectResource from "./SelectResource";
import Footer from "src/components/footer/Footer";
import { Divider } from "src/atoms";


const Comparison: React.FC = () => {
    const { selectedHPC, comparedHPC } = useContext(ComparisonContext);

    return (
        <section className="comparison">
            <DetailsHeader title="Compare two HPC systems" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s" />
            <div className="comparison-select u-margin-bottom-medium">
                <div className="comparison-select--title">
                    <h4 className="comparison-select--title-item comparison-select--title-item_1">Select sytems to compare</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_2">Best use case</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_3">Getting access</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_4">Hardware specifications</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_5">Resource availability</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_6">Data classification</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_7">Integrations</h4>
                    <h4 className="comparison-select--title-item comparison-select--title-item_8">Required skills & knowledge</h4>
                </div>
                <div className="comparison-select--container">
                    <div className="select">
                        <SelectOption /> 
                        <SelectHeader name={selectedHPC} />
                        <SelectUseCase/>
                        <Application />
                        <HardwareContent />
                        <SelectResource />
                        <SelectData />
                        <SelectIntegration />
                        <SelectSkill />
                    </div>
                    <div className="select">
                        <SelectOption compared /> 
                        <SelectHeader name={comparedHPC} />
                        <SelectUseCase compared />
                        <Application compared />
                        <HardwareContent compared />
                        <SelectResource compared />
                        <SelectData compared />
                        <SelectIntegration compared />
                        <SelectSkill compared />

                    </div>
                </div>
               
            </div>
            <Divider />
            <Footer shown />
        </section>
    )
}

export default Comparison;