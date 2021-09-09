import React from 'react'
import StepperFrame from '../components/common/stepper/StepperFrame'
import StepperCardGeneral from '../components/common/stepper/StepperCardGeneral'

const SpeakerCards = {
    0: [<StepperCardGeneral number = {1}/>, <StepperCardGeneral number = {2}/>, <StepperCardGeneral number = {3}/>,
        <StepperCardGeneral number = {4}/>, <StepperCardGeneral number = {5}/>, <StepperCardGeneral number = {6}/>],
    1: [<StepperCardGeneral number = {7}/>, <StepperCardGeneral number = {8}/>, <StepperCardGeneral number = {9}/>,
        <StepperCardGeneral number = {10}/>, <StepperCardGeneral number = {11}/>],
    2: [<StepperCardGeneral number = {12}/>, <StepperCardGeneral number = {13}/>, <StepperCardGeneral number = {14}/>,
        <StepperCardGeneral number = {15}/>],
    3: [<StepperCardGeneral number = {16}/>, <StepperCardGeneral number = {17}/>, <StepperCardGeneral number = {18}/>],
    4: [<StepperCardGeneral number = {19}/>, <StepperCardGeneral number = {20}/>],
    5: [<StepperCardGeneral number = {21}/>],
};

const Speaker = () => {
    return (
        <div>
            <h1>Speakers</h1>
            <StepperFrame cards = {SpeakerCards}/>
        </div>
    )
}

export default Speaker
