import React from 'react'
import '../../../App.css';
import { ContactUsColumns, ContactUsContainer, ContactUsHeader, ContactUsSCGroup, ContactUsSCLogo, ContactUsSCTitle, ContactUsImage, ContactUsSCContainer, ContactUsImageContainer } from './contactUsElements'
import graphic from "../../../assets/graphics/ContactUsGraphic.png"
import facebook from '../../../assets/icons/socialFacebookdark.svg'
import instagram from '../../../assets/icons/socialInstagramdark.svg'
import linkedin from '../../../assets/icons/socialLinkedindark.svg'
import twitter from '../../../assets/icons/socialTwitterdark.svg'
import mail from '../../../assets/icons/socialMaildark.svg'
import './contactUs.css'

const changeInEmailMe = () => {
    document.getElementById("formSubmitButton").setAttribute("disabled", true);
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(document.getElementById("name").value.length < 1 || !re.test(document.getElementById("email").value) || document.getElementById("message").value.length < 1) return;
    document.getElementById("formSubmitButton").removeAttribute("disabled");
}

const ContactUsCard = () => {
    return (
        <ContactUsContainer className="sidePadding">
            <ContactUsHeader>Have any other questions? Send us a message!</ContactUsHeader>
            <ContactUsColumns>
                <ContactUsImageContainer>
                    <ContactUsImage src={graphic}/>
                </ContactUsImageContainer>
                <form id="fs-frm" class="contactUsForm" name="simple-contact-form" accept-charset="utf-8" action="https://formspree.io/f/xwkazzge" method="post">
                        <div class="fields">
                            <div class="field">
                                <label class="fieldTitle" for="name">Name</label>
                                <input type="text" class="contactTextField" name="name" id="name" onKeyDown={changeInEmailMe} onPaste={changeInEmailMe} onInput={changeInEmailMe}/>
                            </div>
                            <div class="field">
                                <label class="fieldTitle" for="email">Email</label>
                                <input type="email" class="contactTextField" name="email" id="email" onKeyDown={changeInEmailMe} onPaste={changeInEmailMe} onInput={changeInEmailMe}/>
                            </div>
                            <div class="field">
                                <label class="fieldTitle" for="message">Message</label>
                                <textarea name="message" class="contactTextField" id="message" rows="4" onKeyDown="changeInEmailMe" 
                                onPaste={changeInEmailMe} onInput={changeInEmailMe}></textarea>
                            </div>
                        </div>
                        <ul class="actions">
                            <input id="formSubmitButton" type="submit" value="Send Email" disabled />
                        </ul>
                    </form>
                {/* <ContactUsSCContainer>
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
                </ContactUsSCContainer> */}
            </ContactUsColumns>
        </ContactUsContainer>
    )
}

export default ContactUsCard
