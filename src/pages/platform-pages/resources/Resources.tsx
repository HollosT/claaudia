
import { AllHPC, HPCCategory, HPCIntroductionType } from 'src/services/types/hpc/hpc';
import { CategoryItem } from './components';
import Footer from 'src/components/footer/Footer';
import { Button, Divider } from 'src/atoms';
import { useFetchData } from 'src/hooks';
import { getAllSystemCategories } from 'src/services/firebase/firebase.utils';
import { SkeletonCat } from './skeleton';
import { ComparisonContext } from 'src/services/context/comparison/comparison-context';
import { useContext } from 'react';
// https://reactrouter.com/en/main
import { useNavigate } from 'react-router-dom';
import platformRoutes from 'src/services/router/platform-routes';
import { ComparisonIcon } from './components/svg';

const Resources: React.FC = () => {
    const {data, loading} = useFetchData(getAllSystemCategories);
    const {handleSelectedHPC} = useContext(ComparisonContext);
    const navigate = useNavigate();

    const handleNav = () => {
        handleSelectedHPC(AllHPC.LocalMachine)
        navigate(platformRoutes.comparison.path)
    }

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
            <div className="resources-header">
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
                <Divider />
                <div className='resources-category u-margin-bottom-big u-margin-top-medium'>
                    <div className='no-hpc--header u-margin-bottom-medium'>
                        <h4 className='resources-category--title u-margin-bottom-tiny'>No HPC system resources</h4>
                        <p className='resources-category--body u-margin-bottom-small'>Sometimes, it might turn out your project does not require high-performance computing. In order to examine whether or not the resources you need are beyond HPC, you can compare specifications of Lenovo ThinkPad P53 (available to loan through AAU Library) with any chosen system.</p>
                        <Button className="resources-category--nav option-nav" onClick={handleNav}>
                            <ComparisonIcon />
                            Compare with other system
                        </Button>
                    </div>
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


            <Footer shown={false} />
        </section>
    )
}

export default Resources;