import { Button } from 'src/atoms';
import { addCases, addDefinitions, addQuestions, addSystemCategories } from 'src/services/firebase/firebase.utils';
import SurveyComponent from './SurveyComponent';
import { useContext } from 'react';
import { QuestionContext } from 'src/services/context/questionnaire/question-context';

// const questions = async () => {
//     await addQuestions();
// }

// const categories = async () => {
//     await addSystemCategories();
// }

// const cases = async () => {
//     await addCases();
// }
// const definitons = async () => {
//     await addDefinitions();
// }
{/* <Button className='btn btn-primary' onClick={questions} >Add questiosn</Button>
<Button className='btn btn-primary' onClick={categories} >Add categories</Button>
<Button className='btn btn-primary' onClick={cases} >Add use cases</Button>
<Button className='btn btn-primary' onClick={definitons} >Add definitions</Button> */}

const About: React.FC = () => {


    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>

            <SurveyComponent />
        </>
    )
}

export default About;