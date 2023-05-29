import { AllHPC } from "src/services/types/hpc/hpc";
import QuizRightArrowIcon from "./QuizRightArrowIcon";

const CurrentHPC: React.FC<{hpc: AllHPC}> = ({hpc}) => {

    return (
        <div className="current-hpc">
           <h4 className="current-hpc--title">{hpc}</h4>
           <QuizRightArrowIcon />
        </div>
    )
}

export default CurrentHPC;