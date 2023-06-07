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
            <DetailsHeader title="Compare two HPC systems" body="Dive into the characteristics of two selected systems for a comprehensive overview of their differences in contrast to each other." />
            <div className="comparison-select u-margin-bottom-medium">
                <div className="comparison-select--title">
                </div>
                <div className="comparison-select--container">
                    <div className="select">
                        <div className="select-title--content-container">
                            <h4 className="select-title--content-container_title">Select sytems to compare</h4>
                            <SelectOption /> 
                        </div>
                        <div className="select-title--content-container">
                        <h4 className="select-title--content-container select-title--content-container_title">Chosen HPC systems</h4>

                            <SelectHeader name={selectedHPC} />
                        </div>
                        <div className="select-title--content-container">
                            <h4 className="select-title--content-container select-title--content-container_title">Best use case</h4>

                        <SelectUseCase/>
                        </div>
                        <div className="select-title--content-container">
                        <h4 className="select-title--content-container_title">Getting access</h4>

                            <Application />
                        </div>
                        <div className="select-title--content-container">
                        <h4 className=" select-title--content-container_title">Hardware specifications</h4>

                        <HardwareContent />
                        </div>
                        <div className="select-title--content-container">
                        <h4 className=" select-title--content-container_title">Resource availability</h4>

                        <SelectResource />
                        </div>
                        <div className="select-title--content-container">
                        <h4 className=" select-title--content-container_title">Data classification</h4>

                        <SelectData />
                        </div>
                        <div className="select-title--content-container">
                        <h4 className=" select-title--content-container_title">Integrations</h4>

                        <SelectIntegration />
                        </div>
                        <div className="select-title--content-container">
                        <h4 className=" select-title--content-container_title">Required skills & knowledge</h4>

                        <SelectSkill />
                        </div>
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