import { Button } from 'src/atoms';
import { addQuestions } from 'src/services/firebase/firebase.utils';


const About: React.FC = () => {

    const questions = async () => {
        await addQuestions();
    }

    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>
            <Button onClick={questions} >Add questiosn</Button>
        </>
    )
}

export default About;