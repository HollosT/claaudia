import { useContext } from "react";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import CurrentHPC from "./CurrentHPC";

const CurrentHPCs: React.FC = () => {
    const {currentHPCs} = useContext(QuestionContext)


    return (
        <div className="hpc-container">
            <div className="hpc-container--header">
                <h3 className="hpc-container--header-title u-margin-bottom-small">Currently advised HPC</h3>
                <p className="hpc-container--header-body u-margin-bottom-small">Based on your current answers, we think that the most fit HPC for your research is</p>
            </div>
            <div className="hpc-container--body">
                {currentHPCs.map((hpc, i) => (
                    <CurrentHPC key={i} hpc={hpc} />
                ))}
            </div>
        </div>
    )
}

export default CurrentHPCs;