import { ArrowLeft, Button} from "src/atoms"
import FinishedSuccessIcon from "./FinishedSuccessIcon"
import { QuestionContext } from "src/services/context/questionnaire/question-context"
import { useContext } from "react"
import { AllHPC } from "src/services/types/hpc/hpc"
import { useNavigate } from "react-router-dom"
import platformRoutes from "src/services/router/platform-routes"

const FinishedHeader: React.FC = () => {
    const {handleProgress, handleCurrentHPCs, handleFinished} = useContext(QuestionContext);
    const navigate = useNavigate()

    const handleReset =  () => {
        handleProgress("10");
        handleCurrentHPCs([AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.LocalMachine, AllHPC.UCloud]);
        handleFinished(false);
        navigate(platformRoutes.quiz.path)
    }



    return (
        <div className="content">
            <div className="content-success">
                <FinishedSuccessIcon />
                <div className="content-success--content">
                    <p className="content-success--content-title p-huge u-margin-bottom-small">
                        You have completed the HPC Matchmaking Quiz
                    </p>
                    <p className="content-success--content-body u-margin-bottom-small">
                        Based on your answers, the selection of HPC has been tailored to the option fitting your needs. You may now take a closer look at the result of the quiz and make sure it fulfils your expectations as well as suits your project requirements.
                    </p>
                    <Button className="content-success--content-nav u-margin-bottom-small" onClick={handleReset}>
                        <ArrowLeft /> 
                        Retake the quiz
                    </Button>
                </div>
            </div>
            <div className="content-next">
                    <p className="content-next--title p-big u-margin-bottom-small">
                        What to do next?
                    </p>
                    <p className="content-next--body u-margin-bottom-small">
                    If you wish to utilize the given high-performance computing system in your project, you should now send a request to CLAAUDIA - Research Data Services at Aalborg University, who will handle your access to the system and answer all your questions regarding its later usage. 
                    </p>
                    <a className="content-next--nav p-big u-margin-bottom-small" href="mailto:support@its.aau.dk"> Contact CLAAUDIA</a>
            </div>
        </div>

    )
}

export default FinishedHeader