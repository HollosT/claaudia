import { AllHPC } from "src/services/types/hpc/hpc";
import QuizRightArrowIcon from "./QuizRightArrowIcon";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import { useContext } from "react";

const CurrentHPC: React.FC<{hpc: AllHPC}> = ({hpc}) => {
    const {handleSelectedHpc, handleIsClose} = useContext(QuestionContext)

    const handleClick = () => {
        handleSelectedHpc(hpc)
        handleIsClose(false)
    }

    return (
        <div className="current-hpc" onClick={handleClick}>
           <h4 className="current-hpc--title">{hpc}</h4>
        
            <QuizRightArrowIcon />
        </div>
    )
}

export default CurrentHPC;