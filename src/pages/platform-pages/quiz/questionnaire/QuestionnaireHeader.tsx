import { useContext } from "react";
import { DoneCheck, MissingCheck, PendingCheck } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import { AnswerType } from "src/services/types/questions";


enum Status {
    done ='Done',
    pending = 'Pending',
    missing = 'missing'
}

const QuestionnaireHeader: React.FC = () => {
    const { questions, goTo, active } = useContext(QuestionContext)

    const handleGoTo = (i: number) => {
        if (i !== active) {
            goTo(i)
        } else {
            return
        }
    }

    const getStatus = (answers: AnswerType[], i: number): React.ReactNode => {
        let status: Status;

        if(i === active) {
            status = Status.pending
        }
        else if(answers.find(a => a.checked === true)) {
            status = Status.done
        } else {
            status = Status.missing
        }
        

        switch(status) {
            case Status.done :
               return <DoneCheck />
               
            case Status.pending :
               return <PendingCheck />
               
            case Status.missing:
               return <MissingCheck />
               
            default: return <MissingCheck />
        }
    }

        return (
            <ul className="questionnarie-header">
              {questions.map((question, i) => {
                const statusComponent = getStatus(question.answers, i);
                return (
                  <li key={i} onClick={() => handleGoTo(i)} className="questionnarie-header-item">
                    {statusComponent}
                    {`${i + 1}. ${question.topic}`}
                  </li>
                );
              })}
            </ul>
          );
}

export default QuestionnaireHeader;