import React from 'react'
import { ContactUsColumns, ContactUsContainer, ContactUsHeader, ContactUsSCGroup, ContactUsSCLogo, ContactUsSCTitle, ContactUsImage, ContactUsSCContainer, ContactUsImageContainer } from './contactUsElements'
import graphic from "../../../assets/graphics/ContactUsGraphic.png"
import facebook from '../../../assets/icons/socialFacebookdark.svg'
import instagram from '../../../assets/icons/socialInstagramdark.svg'
import linkedin from '../../../assets/icons/socialLinkedindark.svg'
import twitter from '../../../assets/icons/socialTwitterdark.svg'
import mail from '../../../assets/icons/socialMaildark.svg'
const ContactUsCard = () => {
    return (
        <ContactUsContainer>
            <ContactUsHeader>Want to say hi or ask a question?</ContactUsHeader>
            <ContactUsColumns>
                <ContactUsImageContainer>
                    <ContactUsImage src={graphic}/>
                </ContactUsImageContainer>
                <ContactUsSCContainer>
                    <ContactUsHeader>Message us at...</ContactUsHeader>
                    <ContactUsSCGroup href="https://www.instagram.com/qhacks21/">
                            <ContactUsSCLogo src={instagram} alt={'Instgram'}/>
                        <ContactUsSCTitle>@QHacks22</ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup href="https://fb.com/qhacks">
                            <ContactUsSCLogo src={facebook} alt={'Facebook'}/>
                        <ContactUsSCTitle>@QHacks</ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup href="https://www.linkedin.com/company/qhacks/">
                            <ContactUsSCLogo src={linkedin} alt={'LinkedIn'}/>
                        <ContactUsSCTitle>QHacks</ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup href="https://twitter.com/QHacks21">
                            <ContactUsSCLogo src={twitter} alt={'Twitter'}/>
                        <ContactUsSCTitle>@QHacks22</ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup href="mailto:hello@qhacks.io">
                            <ContactUsSCLogo src={mail} alt={'Mail'}/>
                        <ContactUsSCTitle>hello@Qhacks.io</ContactUsSCTitle>
                    </ContactUsSCGroup>
                </ContactUsSCContainer>
            </ContactUsColumns>
        </ContactUsContainer>
    )
}

export default ContactUsCard
