import React from 'react';
import { Questionnaire } from './questionnaire';


const Survey: React.FC = () => {

    return (
        <main className='survey'>
            <h1 className='primary-header u-margin-bottom-small'>HPC Survey</h1>
            <Questionnaire />
        </main>
    )
}

export default Survey;