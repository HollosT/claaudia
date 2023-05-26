import React from 'react';
import Skeleton from 'react-loading-skeleton';



const SkeletonCase: React.FC<{iteration: number}> = ({iteration}) => {
    const iterationCount = iteration;
    const iterations = Array.from({ length: iterationCount }, (_, index) => index + 1);
  

    return (
        <>
            {iterations.map((i) => (
                <div key={i} className='skeleton skeleton-case'>
                    <div className='skeleton-case--content'>
                        <h3 className='skeleton-case--content-title'><Skeleton height={35}/></h3>
                        <div className='skeleton-case--content-body'><Skeleton height={120}/></div>
                        <div className='skeleton-case--content-content'><Skeleton height={10} count={3}/></div>
                    </div>
                    <div className='skeleton-case--image'><Skeleton height={250}/></div>
                </div>
            ))}
        </>
    )
}

export default SkeletonCase;