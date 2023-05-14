import { useContext } from "react";
import { DoneCheck } from "src/atoms";
import { QuestionContext } from "src/services/context/question/question-context";


const QuestionnaireHeader: React.FC<{topics: string[]}> = ({topics}) => {
    const {goTo, active} = useContext(QuestionContext)

    const handleGoTo = (i: number) => {
        if(i !== active) {
            goTo(i)
        } else {
            return
        }
    }

    return (
        <ul className="questionnarie-header">
            {topics.map((topic, i) => 
                <li key={i} onClick={() => handleGoTo(i)} className="questionnarie-header-item">
                    <DoneCheck />
                    {/* {`${i + 1}. ${topic}`} */}
                    {i + 1}
                </li>
            )}
        </ul>
    )
}

export default QuestionnaireHeader;