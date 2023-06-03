import React from 'react'


const StepImage: React.FC<{active: number}> = ({active}) => {
    const currActive = active >= 0 || active <=2 ? active : 0
    return  <img className='introduction-img--container_image' src={`/assets/introduction-${currActive+1}.png`} alt="" />   
}

export default StepImage;