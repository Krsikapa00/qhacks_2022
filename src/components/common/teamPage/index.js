import React from 'react'
import TeamMemberCard from '../teamMemberCard'
import picture from '../../../assets/images/testimonialHeadshots/amyLu.png'
import { TeamContainer, PortfolioContainer, PortfolioTitle, TeamMembersGroup } from './teamPageElements';

import annaH from "../../../assets/images/ourTeam/Headshots/Anna_Mucea.png";
import bellZ from "../../../assets/images/ourTeam/Headshots/Bella_Zhong.jpg";
import brianG from "../../../assets/images/ourTeam/Headshots/Brian_Grigore.png";
import carterC from "../../../assets/images/ourTeam/Headshots/Carter_Conboy.png";
import danelP from "../../../assets/images/ourTeam/Headshots/Danel_Polyakov.png";
import dicksonH from "../../../assets/images/ourTeam/Headshots/Dickson_Huang.png";
import emilyS from "../../../assets/images/ourTeam/Headshots/Emily_Slosser.png";
import ericL from "../../../assets/images/ourTeam/Headshots/Eric_Lam.png";
import erinA from "../../../assets/images/ourTeam/Headshots/Erin_Atacan.jpg";
import jenD from "../../../assets/images/ourTeam/Headshots/Jen_Dong.png";
import jeremyS from "../../../assets/images/ourTeam/Headshots/Jeremy_Selwin.png";
import nadishaG from "../../../assets/images/ourTeam/Headshots/Nadisha_Gautam.JPG";
import naomiJ from "../../../assets/images/ourTeam/Headshots/Naomi_Junatas.jpg";
import nicholasK from "../../../assets/images/ourTeam/Headshots/Nicholas_Krsikapa.jpg";
import nicoW from "../../../assets/images/ourTeam/Headshots/Nico_Wilhelm.png";
import sarahG from "../../../assets/images/ourTeam/Headshots/Sarah_Glaspell-Elser.png";
import stevenZ from "../../../assets/images/ourTeam/Headshots/Steven_Zhang.jpg";
import sudarshanK from "../../../assets/images/ourTeam/Headshots/Sudarshan_Kumar.png";
import sydneyS from "../../../assets/images/ourTeam/Headshots/Sydney_Shereck.jpg";
import taliaP from "../../../assets/images/ourTeam/Headshots/Talia_Ponesse.png";
import tracyH from "../../../assets/images/ourTeam/Headshots/Tracy_Han.png";
import wayneS from "../../../assets/images/ourTeam/Headshots/Wayne_Sun.png";


const TeamPage = () => {
    return (
        <TeamContainer>

            <PortfolioContainer>
                <PortfolioTitle>
                    Co - Chairs
                </PortfolioTitle>
                <TeamMembersGroup  
                    style={{
                        justifyContent: "center"
                    }}
                >
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={jenD} name="Jennifer Dong" position="Co-Chair" />
                    <TeamMemberCard special={{"margin": "0 20px"}}  pic={bellZ} name="Bella Zhong" position="Co-Chair" />
                </TeamMembersGroup>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioTitle>
                    Technology
                </PortfolioTitle>
                <TeamMembersGroup
                style={{
                    justifyContent: "center"
                }}>
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={nicholasK} name="Nicholas Krsikapa" position="Technology Director" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={carterC} name="Carter Conboy" position="Technology Officer" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={danelP} name="Danel Polyakov" position="Technology Officer" />
                   
                </TeamMembersGroup>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioTitle>
                    Marketing
                </PortfolioTitle>
                <TeamMembersGroup
                >
                    <TeamMemberCard pic={annaH} name="Anna Mucea" position="Marketing Director" />
                    <TeamMemberCard pic={nadishaG} name="Nadisha Gautam" position="Marketing Officer" />
                    <TeamMemberCard pic={brianG} name="Brian Grigore" position="Marketing Officer" />
                    <TeamMemberCard pic={sydneyS} name="Sydney Shereck" position="Marketing Officer" />
                </TeamMembersGroup>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioTitle>
                    Partnerships
                </PortfolioTitle>
                <TeamMembersGroup
                >
                    <TeamMemberCard pic={jeremyS} name="Jeremy Selwin" position="Partnerships Director" />
                    <TeamMemberCard pic={emilyS} name="Emily Slosser" position="Partnerships Director" />
                    <TeamMemberCard pic={naomiJ} name="Naomi Junatas" position="Partnerships Officer" />
                    <TeamMemberCard pic={ericL} name="Eric Lam" position="Partnerships Officer" />
                    <TeamMemberCard pic={taliaP} name="Talia Ponesse" position="Partnerships Officer" />
                    <TeamMemberCard pic={wayneS} name="Wayne Sun" position="Partnerships Officer" />

                </TeamMembersGroup>
            </PortfolioContainer>
            
            <PortfolioContainer>
                <PortfolioTitle>
                    Finance
                </PortfolioTitle>
                <TeamMembersGroup
                style={{
                    justifyContent: "center"
                }}>
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={dicksonH} name="Dickson Huang" position="Finance Director" />
                   
                </TeamMembersGroup>
            </PortfolioContainer>

            <PortfolioContainer>
                <PortfolioTitle>
                    Operations
                </PortfolioTitle>
                <TeamMembersGroup
                style={{
                    justifyContent: "center"
                }}>
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={nicoW} name="Nico Wilhelm" position="Operations Director" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={erinA} name="Erin Atacan" position="Operations Officer" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={sarahG} name="Sarah Glaspell-Elser" position="Operations Officer" />
                   
                </TeamMembersGroup>
            </PortfolioContainer>
                
            <PortfolioContainer>
                <PortfolioTitle>
                    Logistics
                </PortfolioTitle>
                <TeamMembersGroup
                style={{
                    justifyContent: "center"
                }}>
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={tracyH} name="Tracy Han" position="Logistics Director" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={sudarshanK} name="Sudarshan Kumar" position="Logistics Officer" />
                    <TeamMemberCard special={{"margin": "0 20px"}} pic={stevenZ} name="Steven Zhang" position="Logistics Officer" />
                   
                </TeamMembersGroup>
            </PortfolioContainer>


        </TeamContainer>
    )
}

export default TeamPage;
