import { useContext } from "react";
import { ArrowLeft, Button, Divider, Loading } from "src/atoms";

import { QuestionContext } from "src/services/context/questionnaire/question-context";

import { ALL_HPCS_DATA } from "src/services/types/hpc/constant";
import { AllHPC } from "src/services/types/hpc/hpc";
import FinishedSpec from "./FinishedSpec";
import FinishedSuccessIcon from "./FinishedSuccessIcon";
import FinishedHeader from "./FinishedHeader";

const FinishedQuiz: React.FC = () => {
    const {currentHPCs} = useContext(QuestionContext)
    const hpcs = currentHPCs[0]
    const hpc = ALL_HPCS_DATA.find(allHpc => allHpc.name === hpcs)

    if(!hpc || currentHPCs.length !== 1 ) {
        return <Loading />
    }
    
    return (
            <section className="finished">
                    <FinishedHeader />
                    <Divider />
                    <FinishedSpec hpc={hpc} />
            </section>
    )
};

export default FinishedQuiz;