import { useState } from "react";
import { DoneCheck, EmptyCircle, Input, Label } from "src/atoms";

interface Answer {
    value: string | string[],
    label: string
}

interface AnswerProps {
    answer: Answer;
}

const Answer: React.FC<AnswerProps> = ({answer}) => {
    const [checked, setChecked] = useState<string | string[] | null>(null);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.value);
      };

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
            />
            <Label for={answer.label} className="question-answer--list-item_label">
                <span className="form__radio-button">
                </span>
                {!checked  ? <EmptyCircle /> : <DoneCheck />}
                {answer.label}
            </Label>
        </li>
    )
}

export default Answer;