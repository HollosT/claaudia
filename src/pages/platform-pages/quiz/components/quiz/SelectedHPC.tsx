import { AllHPC } from "src/services/types/hpc/hpc";
import { OptionItem } from "../../../resources/components/details";
import { ALL_HPCS_DATA } from "src/services/types/hpc/constant";
import CloseIcon from "../CloseIcon";
import { useContext, useState } from "react";
import { QuestionContext } from "src/services/context/questionnaire/question-context";

const SelectedHPC: React.FC<{ name: AllHPC }> = ({ name }) => {
    const {isClosed, handleIsClose} = useContext(QuestionContext)
    const hpc = ALL_HPCS_DATA.find(allHpc => allHpc.name === name) || ALL_HPCS_DATA[0]


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