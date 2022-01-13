import React from 'react'
import TeamMemberCard from '../components/common/teamMemberCard'
import picture from '../assets/images/testimonialHeadshots/amyLu.png'

const subTeamDiv = {
    display: "flex",
    justifyContent: "space-around",
    gap: "3vw",
    "@media(max-width: 820px)":{
        display: "inline"
    }
}





const OurTeam = () => {
    return (
        <div className="PageContainer sidePadding">
            <h1 className="PageHeader">Our Team</h1>
            <div style = {subTeamDiv}>
                <TeamMemberCard pic={picture} name="Nicholas Krsikapa" position="Technology Director" />
                <TeamMemberCard pic={picture} name="Nicholas Krsikapa" position="Technology Director" />
                <TeamMemberCard pic={picture} name="Nicholas Krsikapa" position="Technology Director" />
            </div>
            
            
        </div>
    )
}

export default OurTeam
