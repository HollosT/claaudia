import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StepImage, StepItem } from '.';

import { ArrowLeft, ArrowRight, Button, Logo } from 'src/atoms';
import { Step } from 'src/services/types/introduction';

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
                <Logo />
                <StepItem step={activeStep} active={active} />
                <div className='introduction-content--action_container u-margin-top-big'>
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

                                Next 
                                <ArrowRight /> 
                            </Button>
                        }
                    </div>
                    <div className='introduction-content--action_container-container'>
                        <Button className='introduction-content--action_container-skip btn btn-link' onClick={() => startApp()}>Skip introduction</Button>
                        <div className='introduction-content--action_container-step'>
                                <span className='introduction-content--action_container-step-current'>{active + 1}</span>
                                <span className='introduction-content--action_container-step-slash'>/</span>
                                <span className='introduction-content--action_container-step-max'>{maxStep}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='introduction-img--container'>
                <StepImage active={active}/>
            </div>
        </section>

    )
}

export default Stepper;