import { Button } from 'src/atoms';
import { addQuestions } from 'src/services/firebase/firebase.utils';


const About: React.FC = () => {

    const questions = async () => {
        await addQuestions();
    }

    return (
        <>
            <h1>About CLAAUDIA</h1>
            <Button onClick={questions} >Add questiosn</Button>
        </>
    )
}

export default About;