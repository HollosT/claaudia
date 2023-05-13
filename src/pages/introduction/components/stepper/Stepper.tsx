import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepImage, StepItem } from '.';
import { Step } from 'src/services/types/hpc';
import { ArrowLeft, ArrowRight, Button } from 'src/atoms';

interface StepperProps {
    stps: Step[],
    curr?: number,
}

const Stepper: React.FC<StepperProps> = ({ stps, curr }) => {
    const navigate = useNavigate()
    const maxStep = stps.length
    const [active, setActive] = useState(curr ? curr : 0)
    const activeStep = stps[active]


    const handleActive = (inc: Boolean) => {
        if (inc) {
            setActive(prevState => {
                if (prevState === maxStep - 1) {
                    return prevState
                } else {
                    return ++prevState
                }
            })
        } else (
            setActive(prevState => {
                if (prevState === 0) {
                    return prevState
                } else {
                    return --prevState
                }
            })
        )
    }

    const startApp = () => {
        localStorage.setItem('introduction', '1')
        navigate('/')
    }

    return (
        <section className='introduction'>
            <div className='introduction-content'>
                <h3 className='introduction-content--title'>HPC Machmaker <span className='p-small introduction-content--title-owner'>by CLAAUDIA</span></h3>
                <StepItem step={activeStep} active={active} />
                <div className='introduction-content--action_container'>
                    <div className='introduction-content--action_container-primer'>
                        {active === 0 
                            ? 
                            null 
                            : 
                            <Button className='btn btn-link introduction-content--action_container-primer--link' 
                                onClick={() => handleActive(false)}
                            >   
                                <ArrowLeft />
                                Previous
                            </Button>
                        }
                        {active === maxStep - 1 
                            ? 
                            <Button className='btn btn-primary introduction-content--action_container-primer--btn'
                                onClick={() => startApp()}
                            >
                                Start
                                <ArrowRight /> 
                            </Button>
                            :
                            <Button className='btn btn-primary introduction-content--action_container-primer--btn' 
                                onClick={() => handleActive(true)}> 
                                <span className='btn-primary--count'>{`${active + 1} / ${maxStep}`} |</span> 
                                Next 
                                <ArrowRight /> 
                            </Button>
                        }
                    </div>
                    <Button className='introduction-content--action_container-skip btn btn-link' onClick={() => startApp()}>Skip introduction</Button>
                </div>
            </div>
            <div className='introduction-img--container'>
                <StepImage/>
            </div>
        </section>

    )
}

export default Stepper;