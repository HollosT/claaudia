import React, { useContext } from 'react';
import { QuestionContext } from 'src/services/context/questionnaire/question-context';
import Questions from './quiz/Questions';


const Survey: React.FC = () => {
    const {currentHPCs} = useContext(QuestionContext)

    return (
        <section className='quiz'>
            <h1 className='primary-header u-margin-bottom-small'>HPC Mathing quiz</h1>
            <div className='quiz-body'>
                <Questions />

                <div>
                {currentHPCs && currentHPCs.map(hpc => (
                    <p key={hpc}>{hpc}</p>
                ))}

                </div>
            </div>
        </section>
    )
}

export default Survey;