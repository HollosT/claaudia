import { Button } from 'src/atoms';
import { addCases, addDefinitions, addHPCs, addSystemCategories, addSystemData } from 'src/services/firebase/firebase.utils';



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
    const systemData = async () => {
        await addSystemData();
    }
    const addHpcsdata = async () => {
        await addHPCs();
    }
    
    return (
        <>
            <h1 className='primary-header u-margin-bottom-small'>About CLAAUDIA</h1>
            <Button className='btn btn-primary' onClick={categories} >Add categories</Button>
            <Button className='btn btn-primary' onClick={cases} >Add use cases</Button>
            <Button className='btn btn-primary' onClick={definitons} >Add definitions</Button>
            <Button className='btn btn-primary' onClick={systemData} >Add System data</Button>
            <Button className='btn btn-primary' onClick={addHpcsdata} >Add HPCs</Button>

        </>
    )
}

export default About;