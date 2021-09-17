import React from 'react'
import StepperFrame from '../components/common/stepper/StepperFrame'
import StepperCardGeneral from '../components/common/stepper/StepperCardGeneral'
import AhelyS from '../assets/images/speakers/headshots/AhelyS.jpg'
import AndreaCorey from '../assets/images/speakers/headshots/AndreaCorey.jpg'

import Rogers from '../assets/images/sponsors/Rogers.png'


const SpeakerCards = [
     [
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers}

    ],
    [
        {picture: AndreaCorey,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers},
        {picture: AhelyS,  name:"Nicholas Krsikapa", position:"Software Developer", company:Rogers}
    ]
];

const Speaker = () => {
    return (
        <div>
            <StepperFrame cards = {SpeakerCards}/>
        </div>
    )
}

export default Speaker
