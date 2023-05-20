import { AllHPC, DataLevel, HPCCategory } from 'src/services/types/hpc';
import { v4 as uuidv4} from 'uuid'
import { CategoryItem } from './components';



const DUMMY_HPC_CATEGORY: HPCCategory[] = [
    {
        id: uuidv4(),
        initial: 'LM',
        name: 'Local machine',
        dataLevel: [DataLevel.Free, DataLevel.Number, DataLevel.Private, DataLevel.Sensitive],
        additionalInfo: 'Lenovo ThinkPad available to borrow at AAU'
    },
    {
        id: uuidv4(),
        initial: 'S',
        name: 'Strato',
        subHpcs: [ AllHPC.StratoRegular,AllHPC.StratoBuyIn, AllHPC.StratoProjects],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
    {
        id: uuidv4(),
        initial: 'AL',
        name: 'AI Cloud',
        subHpcs: [ AllHPC.AiCloud,AllHPC.AiCloudBuyIn, AllHPC.AiCloudProjects],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
    {
        id: uuidv4(),
        initial: 'UC',
        name: 'UCLoud',
        subHpcs: [],
        dataLevel: [DataLevel.Free, DataLevel.Number],
    },
]


const Resources: React.FC = () => {

    return (
        <section className="resources">
            <div className="resources-header u-margin-bottom-medium">
                <h1 className='primary-header u-margin-bottom-small'>AAU HPC Resources</h1>
                <p className="resources-header--body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='resources-category'>
                { DUMMY_HPC_CATEGORY.map(category => (
                    <CategoryItem key={category.id} cat={category} />
                ))}
            </div>



        </section>
    )
}

export default Resources;