import React from 'react'
import { PartnershipGroup, PartnershipContainer, PartnershipButton, PartnershipHeader, PartnershipLogo, Partnershiptext } from './partnershipCardElements'
import partnershipLogo from '../../../assets/icons/partnershipIcon.png'


const PartnershipCard = () => {
    return (
        <PartnershipContainer>
            <PartnershipLogo src={partnershipLogo}/>

            <PartnershipGroup>
                <PartnershipHeader>Interested in Partnering?</PartnershipHeader>
                <Partnershiptext>Contact Us at <a href="mailto:hello@qhacks.io" target="_blank" rel="noreferrer" style={{color: "#B43948"}}>partnership@qhacks.io</a></Partnershiptext>
                <PartnershipButton>Partnership Package</PartnershipButton>
            </PartnershipGroup>
        </PartnershipContainer>
    )
}

export default PartnershipCard
