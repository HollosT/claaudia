import { Button } from 'src/atoms';
import { addCases, addDefinitions, addSystemCategories } from 'src/services/firebase/firebase.utils';



const About: React.FC = () => {
    

const categories = async () => {
    await addSystemCategories();
}

const cases = async () => {
    await addCases();
}
const definitons = async () => {
    await addDefinitions();
}
    
    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>
            <Button className='btn btn-primary' onClick={categories} >Add categories</Button>
            <Button className='btn btn-primary' onClick={cases} >Add use cases</Button>
            <Button className='btn btn-primary' onClick={definitons} >Add definitions</Button>

        </>
    )
}

export default About;