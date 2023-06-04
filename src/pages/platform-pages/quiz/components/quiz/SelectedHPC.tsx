import { AllHPC } from "src/services/types/hpc/hpc";
import { OptionItem } from "../../../resources/components/details";
import CloseIcon from "../CloseIcon";
import { useContext } from "react";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import { HPCContext } from "src/services/context/hpc/hpc-context";

const SelectedHPC: React.FC<{ name: AllHPC }> = ({ name }) => {
    const {allHPCs} = useContext(HPCContext)

    const {isClosed, handleIsClose} = useContext(QuestionContext)
    const hpc = allHPCs.find(allHpc => allHpc.name === name) || allHPCs[0]


    const handleCloseIconClick = () => {
        handleIsClose(true);
    };

    return (
        <div className={isClosed ? "selected-hpc" : "selected-hpc open-selected-hpc"}>
            <CloseIcon onClick={handleCloseIconClick} />

            <div className="selected-hpc--container ">
                <h4 className="selected-hpc--container-title u-margin-bottom-small">Learn more about the system</h4>
                <OptionItem hpc={hpc} />

            </div>
        </div>
    )
}

export default SelectedHPC;