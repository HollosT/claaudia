import { useContext } from "react";
import {  Loading } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import Answer from "./Answer";


const Question: React.FC = () => {
    const { activeQuestion, active } = useContext(QuestionContext)
    
    if(!activeQuestion){
        return <Loading />
    }

    return (
        <section className="question u-margin-top-small">
            <div className="question-topic u-margin-bottom-small ">
                <span className="question-topic--badge">{active + 1}</span>
                <p className="question-topic--title">{activeQuestion.topic}</p>
            </div>
            <h2 className="question-question p-huge u-margin-bottom-small">{activeQuestion.question}</h2>
            <div className="question-answer">
                <p className="question-answer--hint u-margin-bottom-small">Select a single answer from provided options</p>
                <form className="question-answer--form">
                    <ul className="question-answer--list">
                        {activeQuestion.answers.map(answer => (
                            <Answer key={answer.label} answer={answer} />
                        ))}

                    </ul>
                </form>
            </div>
        </section>
    )
}

export default Question;