import { useContext } from "react";
import { Divider, Loading } from "src/atoms";

import { QuestionContext } from "src/services/context/questionnaire/question-context";

import FinishedSpec from "./FinishedSpec";
import FinishedHeader from "./FinishedHeader";
import { HPCContext } from "src/services/context/hpc/hpc-context";

const FinishedQuiz: React.FC = () => {
    const {allHPCs} = useContext(HPCContext)

    const {currentHPCs} = useContext(QuestionContext)
    const hpcs = currentHPCs[0]
    const hpc = allHPCs.find(allHpc => allHpc.name === hpcs)
    
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