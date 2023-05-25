import { Button } from 'src/atoms';
import { addCases, addQuestions, addSystemCategories } from 'src/services/firebase/firebase.utils';


const About: React.FC = () => {

    const questions = async () => {
        await addQuestions();
    }

    const categories = async () => {
        await addSystemCategories();
    }

    const cases = async () => {
        await addCases();
    }

    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>
            <Button onClick={questions} >Add questiosn</Button>
            <Button onClick={categories} >Add categories</Button>
            <Button onClick={cases} >Add use cases</Button>
        </>
    )
}

export default About;