import React, { useContext } from 'react';
import Questions from './Questions';
import Footer from 'src/components/footer/Footer';
import { QuestionContext } from 'src/services/context/questionnaire/question-context';
import SelectedHPC from './SelectedHPC';
import { Button } from 'reactstrap';
import { AllHPC } from 'src/services/types/hpc/hpc';



const Survey: React.FC = () => {
    const { selectedHpc, survey, handleProgress, handleCurrentHPCs, progress, finished, currentHPCs } = useContext(QuestionContext)

    const handleReset = () => {
        if(survey) {
          survey.clear();
          survey.render();
          handleProgress("10");
          handleCurrentHPCs([AllHPC.StratoRegular, AllHPC.StratoProjects, AllHPC.StratoBuyIn, AllHPC.AiCloud, AllHPC.AiCloudProjects, AllHPC.AiCloudBuyIn, AllHPC.LocalMachine, AllHPC.UCloud]);
        }
    }

    return (
        <>
            <section className='quiz u-margin-bottom-medium'>
                <div className='quiz-header'>
                    <h1 className='primary-header u-margin-bottom-small'>HPC Matchmaking Quiz</h1>
                   {progress !== "10" && !finished ?  <Button className='quiz-header--btn' onClick={handleReset}>Reset</Button> : null}
                </div>
                <Questions/>
                <SelectedHPC name={selectedHpc} />
            </section>
            <Footer shown={true} />
        </>
    )
}

export default Survey;