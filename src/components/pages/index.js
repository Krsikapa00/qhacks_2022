import React from 'react'
import StepperFrame from '../common/stepper/StepperFrame'
import StepperCardGeneral from '../common/stepper/StepperCardGeneral'

const Home = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1>Home</h1>
            <StepperFrame cards={[  <StepperCardGeneral number="1"/>, <StepperCardGeneral number="2"/>, <StepperCardGeneral number="3"/>, <StepperCardGeneral number="4"/>, 
                                    <StepperCardGeneral number="5"/>, <StepperCardGeneral number="6"/>]}/>
        </div>
    )
}

export default Home
