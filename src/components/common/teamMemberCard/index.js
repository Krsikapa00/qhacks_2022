import React from 'react'
import { Container, Headshot, TextGroup, MemberName, MemberPosition } from './teamMemberCardElements'

const TeamMemberCard = (props) => {
    
 

    return (
        <Container style={props.special} >
            <Headshot src={props.pic} alt={props.name} />
            <TextGroup>
                <MemberName>{props.name}</MemberName>
                <MemberPosition>{props.position}</MemberPosition>
            </TextGroup>
        </Container>
    )
}

export default TeamMemberCard
