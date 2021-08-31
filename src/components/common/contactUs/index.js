import React from 'react'
import { ContactUsColumns, ContactUsContainer, ContactUsHeader, ContactUsSCGroup, ContactUsSCLink, ContactUsSCTitle, ContactUsImage, ContactUsSCContainer, ContactUsImageContainer } from './contactUsElements'
import graphic from "../../../assets/graphics/ContactUsGraphic.png"
import facebook from '../../../assets/icons/socialFacebook.svg'
import instagram from '../../../assets/icons/socialInstagram.svg'
import linkedin from '../../../assets/icons/socialLinkedin.svg'
import twitter from '../../../assets/icons/socialTwitter.svg'
import mail from '../../../assets/icons/socialMail.svg'
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
                    <ContactUsSCGroup>
                        <ContactUsSCLink>
                            <img src={instagram} alt={'Instgram'}/>
                        </ContactUsSCLink>
                        <ContactUsSCTitle>@QHacks22</ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup>
                        <ContactUsSCLink></ContactUsSCLink>
                        <ContactUsSCTitle></ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup>
                        <ContactUsSCLink></ContactUsSCLink>
                        <ContactUsSCTitle></ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup>
                        <ContactUsSCLink></ContactUsSCLink>
                        <ContactUsSCTitle></ContactUsSCTitle>
                    </ContactUsSCGroup>
                    <ContactUsSCGroup>
                        <ContactUsSCLink></ContactUsSCLink>
                        <ContactUsSCTitle></ContactUsSCTitle>
                    </ContactUsSCGroup>
                </ContactUsSCContainer>
            </ContactUsColumns>
        </ContactUsContainer>
    )
}

export default ContactUsCard
