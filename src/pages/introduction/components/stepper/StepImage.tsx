import React from 'react'

const StepImage: React.FC<{img: string, alt: string}> = ({img, alt}) => {

    return <img className='introduction-img--container_image' src={img} alt={alt} />   
}

export default StepImage;