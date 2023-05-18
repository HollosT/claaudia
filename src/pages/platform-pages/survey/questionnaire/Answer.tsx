import React, { useContext } from "react";
import { DoneCheck, EmptyCircle, Input, Label } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";

interface Answer {
    value: string,
    label: string,
    checked: boolean,
}

interface AnswerProps {
    answer: Answer;
}

const Answer: React.FC<AnswerProps> = ({answer}) => {
    const { updateChecked } = useContext(QuestionContext)
    
    const handleChange = () => {
        updateChecked(answer.label);
    }

    return (
        <li 
        className="question-answer--list-item u-margin-bottom-medium"
        >
            <Input 
                type="radio"
                name="answer"
                className="question-answer--list-item_radio "
                value={answer.label} id={answer.label}
                onChange={handleChange}
                checked={answer.checked}
            />
            <Label for={answer.label} className="question-answer--list-item_label">
                <span className="form__radio-button">
                </span>
                {!answer.checked ? <EmptyCircle /> : <DoneCheck />}
                {answer.label}
            </Label>
        </li>
    )
}

export default Answer;