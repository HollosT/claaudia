
import { CategoryItem } from './components';
import { DUMMY_HPC_CATEGORY } from 'src/services/types/hpc/constant';




const Resources: React.FC = () => {

    return (
        <section className="resources">
            <div className="resources-header u-margin-bottom-medium">
                <h1 className='primary-header u-margin-bottom-small'>AAU HPC Resources</h1>
                <p className="resources-header--body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className='resources-category'>
                {DUMMY_HPC_CATEGORY.map(category => (
                    <CategoryItem key={category.id} cat={category} />
                ))}
            </div>



        </section>
    )
}

export default Resources;