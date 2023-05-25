import React from 'react';
import Skeleton from 'react-loading-skeleton';



const SkeletonCat: React.FC = () => {

    return (
        <div className='skeleton skeleton-category'>
            <div className='skeleton-category--initial'><Skeleton height={50} width={50}/></div>
            <div className='skeleton-category--content'>
                <h3 className='skeleton-category--content-title'><Skeleton height={25}/></h3>
                <div className='skeleton-category--content-body'><Skeleton height={15}/></div>
            </div>
        </div>
    )
}

export default SkeletonCat;