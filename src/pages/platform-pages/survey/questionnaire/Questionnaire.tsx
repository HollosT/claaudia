
import { QuestionnaireHeader, Question } from "."
import { useContext } from "react";
import { ArrowLeft, ArrowRight, Button } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";



const Questionnaire: React.FC = () => {
    const { questions, handleActive, active } = useContext(QuestionContext)

    return (
        <>
            <QuestionnaireHeader />
            <Question />

            <div className="questionnaire-action--container">
                {active === 0 ?
                    null
                    :
                    <Button
                        onClick={() => handleActive(false)}
                        className="btn btn-link btn-primary--icon"
                    >
                        <ArrowLeft />
                        Previous question
                    </Button>

                }
                {active === questions.length - 1 ?
                    null
                    :
                    <Button
                        onClick={() => handleActive(true)}
                        className="btn btn-primary btn-primary--icon"
                    >
                        Next question
                        <ArrowRight />
                    </Button>

                }
            </div>
        </>
    )
}

export default Questionnaire;