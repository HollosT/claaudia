
import { HPCCategory, HPCIntroductionType } from 'src/services/types/hpc/hpc';
import { CategoryItem } from './components';
import { DUMMY_HPC_CATEGORY } from 'src/services/types/hpc/constant';
import Footer from 'src/components/footer/Footer';
import { Divider } from 'src/atoms';




const Resources: React.FC = () => {
    const noHpc: HPCIntroductionType[] = [];
    const internalHpc: HPCIntroductionType[] = [];
    const danishHpc: HPCIntroductionType[] = [];

    DUMMY_HPC_CATEGORY.forEach((hpc) => {
        switch (hpc.category) {
        case HPCCategory.NoHpc:
            noHpc.push(hpc);
            break;
        case HPCCategory.Internal:
            internalHpc.push(hpc);
            break;
        case HPCCategory.Danish:
            danishHpc.push(hpc);
            break;
        default:
            break;
        }
    });


    return (
        <section className="resources">
            <div className="resources-header u-margin-bottom-medium">
                <h1 className='primary-header u-margin-bottom-small'>AAU HPC Resources</h1>
                <p className="resources-header--body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div>
                <div className='resources-category u-margin-bottom-medium'>
                    {noHpc.length > 0 && 
                        <>
                            <h4 className='resources-category--title u-margin-bottom-small'>No HPC system resources</h4>
                            {noHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} className="no-hpc" />
                            ))}
                        </>
                    }
                </div>
                <div className='resources-category u-margin-bottom-medium'>
                    {internalHpc.length > 0 && 
                        <>
                            <h4 className='resources-category--title u-margin-bottom-small'>Internal AAU resources</h4>
                            {internalHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} />
                            ))}
                        </>
                    }
                </div>
                <div className='resources-category u-margin-bottom-medium'>
                    {danishHpc.length > 0 && 
                        <>
                            <h4 className='resources-category--title u-margin-bottom-small'>Danish resources</h4>
                            {danishHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} />
                            ))}
                        </>
                    }
                </div>
            </div>

                <Divider />
                <Footer shown={false} />
        </section>
    )
}

export default Resources;