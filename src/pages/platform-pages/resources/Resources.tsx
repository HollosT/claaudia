
import { HPCCategory, HPCIntroductionType } from 'src/services/types/hpc/hpc';
import { CategoryItem } from './components';
import Footer from 'src/components/footer/Footer';
import { Divider } from 'src/atoms';
import { useFetchData } from 'src/hooks';
import { getAllSystemCategories } from 'src/services/firebase/firebase.utils';
import { SkeletonCat } from './skeleton';




const Resources: React.FC = () => {
    const {data, loading} = useFetchData(getAllSystemCategories);

    const noHpc: HPCIntroductionType[] = [];
    const internalHpc: HPCIntroductionType[] = [];
    const danishHpc: HPCIntroductionType[] = [];

    data?.forEach((hpc) => {
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
                <h1 className='primary-header u-margin-bottom-small'>HPC Resources</h1>
                <p className="resources-header--body">Find out more about high-performance computing resources available for you. See an overview of the offered hardware, operating systems and possible skills required to interact with the machines. Explore the benefits of each of the systems or run a comparison query to have a better understanding of the differences. </p>
            </div>
            <div>
            
                <div className='resources-category u-margin-bottom-medium'>
                    <h4 className='resources-category--title u-margin-bottom-small'>Internal AAU resources</h4>
                    {loading ?
                        <SkeletonCat />
                        : 
                        <>
                            {internalHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} />
                            ))}
                        </>
                    }
                </div>
                <div className='resources-category u-margin-bottom-medium'>
                        <h4 className='resources-category--title u-margin-bottom-small'>Danish resources</h4>
                    {loading ?
                        <SkeletonCat />
                        : 
                        <>
                            {danishHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} />
                            ))}
                        </>
                    }
                </div>
                <div className='resources-category u-margin-bottom-medium'>
                    <h4 className='resources-category--title u-margin-bottom-small'>No HPC system resources</h4>
                    {loading ?

                        <SkeletonCat />
                        : 
                        <>
                            {noHpc.map(category => (
                                <CategoryItem key={category.id} cat={category} className="no-hpc" />
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