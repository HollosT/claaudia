import { Step } from "src/services/types/introduction";


interface StepProps {
    step: Step;
    active: number;
}

const StepItem: React.FC<StepProps> = ({ step, active }) => {

    return (
        <article className='introduction-content--body u-margin-top-medium u-margin-bottom-medium'>
            <p className='introduction-content--body-question u-margin-bottom-tiny'>
                {active + 1}. {step.question}
            </p>
            <h1 className='introduction-content--body-answer_title u-margin-bottom-small'>
                {step.title}
            </h1>
            <p className='introduction-content--body-answer_body'>
                {step.body}
            </p>
        </article>
    )
}

export default StepItem;