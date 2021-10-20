import React from 'react'
import Videocomponent from '../videoComponent'
import { OsDivider, OsGroup, OsText, OsTitle, OsContainer, OsImage , OsImageContainer, OsIconGroup, OsBucket } from './valuePropositionCardElements.js'
import growNetimg from '../../../assets/images/valueProposition/sellingPointOne.jpg';
import '../../../App.css';

import showCasetoExperts from '../../../assets/images/valueProposition/sellingPointTwo.jpg';
import applicationsIcon from '../../../assets/icons/applicationsIcon.svg';
import schoolsIcon from '../../../assets/icons/schoolsIcon.svg';
import hackersIcon from '../../../assets/icons/hackersIcon.svg';
import mentorsIcon from '../../../assets/icons/mentorsIcon.svg';
import judgesIcon from '../../../assets/icons/judgesIcon.svg';
import challengesIcon from '../../../assets/icons/challengesIcon.svg';
import StatCard from '../statCard';

const link = "https://www.youtube.com/embed/DDmkCcMQYBE?rel=0&amp;controls=0&amp;showinfo=0"



const ValueProposition = () => {
    return (
        <OsBucket className="sidePadding">
            <OsContainer>
                <OsGroup>
                    <OsTitle>
                        Dream It. Build It.
                    </OsTitle>
                    <OsDivider>
                        <div style={{ background: "#00205B", height: "15px", width: "33%" }}  ></div>
                        <div style={{ background: "#c81c2e", height: "15px", width: "33%", margin:"0 5px" }}  ></div>
                        <div style={{ background: "#fedb01", height: "15px", width: "33%" }}  ></div>
                    </OsDivider>
                    <OsText>
                        Join over 500 hackers, speakers and mentors to create, learn and share your ideas all virtually this year! Attend workshops, take part in hacker challenges, meet industry professionals, and some new friends. Out-of-the-box thinkers, creatives, and innovators from all faculties and skill levels are encouraged to attend. We can't wait to see you there!
                    </OsText>
                </OsGroup>
                <Videocomponent Link={link} Title={"2021 QHacks Promo Video"} />
            </OsContainer>


            <OsContainer style={{ "flex-direction": "column-reverse"}}>
                <OsImageContainer>
                    <OsImage src={growNetimg}  />
                </OsImageContainer>
                <OsGroup>
                    <OsTitle>
                        Grow Your Network.
                    </OsTitle>
                    <OsDivider>
                        <div style={{ background: "#00205B", height: "15px", width: "33%" }}  ></div>
                        <div style={{ background: "#c81c2e", height: "15px", width: "33%", margin:"0 5px" }}  ></div>
                        <div style={{ background: "#fedb01", height: "15px", width: "33%" }}  ></div>
                    </OsDivider>
                    <OsText>
                        With hundreds of talented, ambitious, and like-minded individuals all in one place, QHacks is the perfect playground for any tech enthusiast! Over the weekend, immerse yourself in the community, meet new people and talk shop with other students and companies! Strong connections aren’t only important for internet speeds - this is your chance to build, learn and grow!            
                    </OsText>
                    <OsIconGroup>
                        <StatCard image={applicationsIcon} alt="Applications" statistic="3000+" unit="Applications"/>
                        <StatCard image={schoolsIcon} alt="Schools" statistic="25+" unit="Schools"/>
                        <StatCard image={hackersIcon} alt="Hackers" statistic="500+" unit="Hackers"/>
                    </OsIconGroup>
                </OsGroup>
            </OsContainer>

            <OsContainer >
                <OsGroup>
                    <OsTitle>
                        Showcase to Experts.
                    </OsTitle>
                    <OsDivider>
                        <div style={{ background: "#00205B", height: "15px", width: "33%" }}  ></div>
                        <div style={{ background: "#c81c2e", height: "15px", width: "33%", margin:"0 5px" }}  ></div>
                        <div style={{ background: "#fedb01", height: "15px", width: "33%" }}  ></div>
                    </OsDivider>
                    <OsText>
                        This year, we’re bringing together a diverse group of mentors, speakers, sponsors and other industry professionals. Chat one-on-one, learn about current tech trends and opportunities, and show off your skills! Looking for some inspiration? Encountering a roadblock? Does python feel like it’s constricting you? Not to worry, there will always be a helping hand at the ready.
                    </OsText>
                    <OsIconGroup>
                        <StatCard image={mentorsIcon} alt="Mentors" statistic="40+" unit="Mentors"/>
                        <StatCard image={judgesIcon} alt="Judges" statistic="20+" unit="Judges"/>
                        <StatCard image={challengesIcon} alt="Prizes" statistic="10+" unit="Prizes"/>
                    </OsIconGroup>
                </OsGroup>
                <OsImageContainer>
                    <OsImage src={showCasetoExperts}  />
                </OsImageContainer>
            </OsContainer>
        </OsBucket>
    )
}

export default ValueProposition
