import { Step } from "src/services/types/hpc";

interface StepProps {
    step: Step;
    active: number;
}

const StepItem: React.FC<StepProps> = ({ step, active }) => {

    return (
        <article className='introduction-content--body u-margin-top-big u-margin-bottom-medium'>
            <p className='introduction-content--body-question u-margin-bottom-small'>
                {active + 1}. {step.question}
            </p>
            <h2 className='introduction-content--body-answer_title u-margin-bottom-small'>
                {step.title}
            </h2>
            <p className='introduction-content--body-answer_body'>
                {step.body}
            </p>
        </article>
    )
}

export default StepItem;