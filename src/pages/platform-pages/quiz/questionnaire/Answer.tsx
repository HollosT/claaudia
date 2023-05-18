import React, { useContext } from "react";
import { EmptyCircle, Input, Label, SelectedAnswer } from "src/atoms";
import { QuestionContext } from "src/services/context/questionnaire/question-context";
import { AnswerType } from "src/services/types/questions";

interface AnswerProps {
    answer: AnswerType;
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
                {!answer.checked ? <EmptyCircle /> : <SelectedAnswer />}
                {answer.label}
            </Label>
        </li>
    )
}

export default Answer;