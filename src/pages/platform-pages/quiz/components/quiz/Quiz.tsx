import React, { useContext } from 'react';
import Questions from './Questions';
import Footer from 'src/components/footer/Footer';
import { QuestionContext } from 'src/services/context/questionnaire/question-context';
import SelectedHPC from './SelectedHPC';



const Survey: React.FC = () => {
    const { selectedHpc } = useContext(QuestionContext)

    return (
        <>
            <section className='quiz u-margin-bottom-medium'>
                <h1 className='primary-header u-margin-bottom-small'>HPC Matching quiz</h1>
                <Questions />
                <SelectedHPC name={selectedHpc} />
            </section>
            <Footer shown={true} />
        </>
    )
}

export default Survey;