import React from 'react';
import Skeleton from 'react-loading-skeleton';



const SkeletonDefinition: React.FC<{iteration: number}> = ({iteration}) => {
    const iterationCount = iteration;
    const iterations = Array.from({ length: iterationCount }, (_, index) => index + 1);
  
    return (
        <>
            {iterations.map((i) => (
                <div key={i} className='skeleton skeleton-def'>
                        <h3 className='skeleton-def--title u-margin-bottom-small'><Skeleton height={40}/></h3>
                        <div className='skeleton-def--content-body'><Skeleton height={15} count={8}/></div>
    
                </div>
            ))}
        </>
    )
}

export default SkeletonDefinition;