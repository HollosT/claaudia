import { useContext } from "react";
import { Input, Label } from "src/atoms";
import { QuestionContext } from "src/services/context/question/question-context";


const Question: React.FC= () => {
    const {activeQuestion,active} = useContext(QuestionContext)


    return (
        <section className="question u-margin-top-small">
            <div className="question-topic u-margin-bottom-small ">
                <span className="question-topic--badge">{active + 1}</span>
                <p className="question-topic--title">{activeQuestion.topic}</p>
            </div>
            <h2 className="question-question p-huge u-margin-bottom-medium">{activeQuestion.question}</h2>
            <div className="question-answer">
                <p className="question-answer--hint u-margin-bottom-small">Select a single answer from provided options</p>
                <form className="question-answer--form">
                        <ul className="question-answer--list">
                                {activeQuestion.answers.map(answer => (
                                    <li 
                                    key={answer.label}
                                    className="question-answer--list-item"
                                    >
                                        <Input 
                                            type="radio"
                                            name="answer"
                                            className="question-answer--list-item_radio"
                                            value={answer.label} id={answer.label}
                                        />
                                        <Label for={answer.label} className="question-answer--list-item_label">
                                            <span className="form__radio-button"></span>
                                            {answer.label}
                                        </Label>
                                    </li>
                                ))}

                        </ul>
                </form>
            </div>
        </section>
    )
}

export default Question;