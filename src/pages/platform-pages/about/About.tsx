import { Button } from 'src/atoms';
import { addQuestions, addSystemCategories } from 'src/services/firebase/firebase.utils';


const About: React.FC = () => {

    const questions = async () => {
        await addQuestions();
    }

    const categories = async () => {
        await addSystemCategories();
    }

    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>
            <Button onClick={questions} >Add questiosn</Button>
            <Button onClick={categories} >Add categories</Button>
        </>
    )
}

export default About;