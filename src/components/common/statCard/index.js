import React from 'react'
import { StatCardGroup, StatCardUnit, StatCardValue, StatCardIcon  } from './statCardElements'
const StatCard = (props) => {
    return (
        <StatCardGroup>
            <StatCardIcon src={props.image} alt={props.alt}/> 
            <StatCardValue>{props.statistic}</StatCardValue>
            <StatCardUnit>{props.unit}</StatCardUnit>
        </StatCardGroup>
    )
}

export default StatCard
