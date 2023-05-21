import { HPCIntroductionType } from "src/services/types/hpc/hpc";
import Subs from "./Subs";
import DataLevel from "./DataLevel";
import AdditionalInfo from "./AdditionalInfo";
import { Link } from "react-router-dom";
import { ResourcesRightArrow } from "./svg";

const CategoryItem: React.FC<{ cat: HPCIntroductionType }> = ({ cat }) => {

    return (
            <div  className='category-item u-margin-bottom-medium'>
                <div className='category-item--initial'>
                    <h3 className='category-item--initial-title'>{cat.initial}</h3>
                </div>
                <div className='category-content'>
                    <div className='category-content--body'>
                        <h4 className='category-content--body-title'>{cat.name}</h4>
                        <div className='category-content--body-content'>
                            {cat.subHpcs ?
                                <Subs subs={cat.subHpcs} />
                                : null
                            }
                            <DataLevel data={cat.dataLevel} />
                            {cat.additionalInfo ? <AdditionalInfo info={cat.additionalInfo} /> : null}
                        </div>
                    </div>
                    <Link to={cat.link}>
                        <ResourcesRightArrow />
                    </Link>
                </div>
            </div>
    )
}

export default CategoryItem;