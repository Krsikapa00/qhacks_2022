import React from 'react'
import { FooterContainer, FooterSCLink, FooterMenu, FooterPageLink, FooterLinksMenu, FooterLinkLogo } from './footerElements';
import facebook from '../../../assets/icons/socialFacebook.svg'
import instagram from '../../../assets/icons/socialInstagram.svg'
import linkedin from '../../../assets/icons/socialLinkedin.svg'
import twitter from '../../../assets/icons/socialTwitter.svg'
import mail from '../../../assets/icons/socialMail.svg'
import logo from '../../../assets/images/logo/qhacksCrown-colored.svg';



const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterMenu>
                    <FooterSCLink href="https://www.instagram.com/qhacks21/">
                            <img src={instagram} alt={'Instgram'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://twitter.com/QHacks21">
                            <img src={twitter} alt={'Twitter'}/>
                    </FooterSCLink>
                    <FooterSCLink href="mailto:hello@qhacks.io">
                            <img src={mail} alt={'Mail'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://www.linkedin.com/company/qhacks/">
                            <img src={linkedin} alt={'Linkedin'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://fb.com/qhacks">
                            <img src={facebook} alt={'Facebook'}/>
                    </FooterSCLink>
                </FooterMenu>
                <FooterLinksMenu>
                    <FooterPageLink exact={true} to="/" activeStyle>
                        Home
                    </FooterPageLink>
                    <FooterPageLink to="/schedule" activeStyle>
                        Schedule
                    </FooterPageLink> 
                    <FooterPageLink to="/speakers" activeStyle>
                        Speakers
                    </FooterPageLink>
                    <FooterPageLink to="/sponsors" activeStyle>
                        Sponsors
                    </FooterPageLink>
                    <FooterPageLink to="/our-team" activeStyle>
                        Our Team
                    </FooterPageLink>
                    <FooterPageLink to="/testimonials" activeStyle>
                        Testimonials
                    </FooterPageLink>
                    <FooterPageLink to="/archive" activeStyle>
                        Archive
                    </FooterPageLink>
                    <FooterPageLink to="/faq" activeStyle>
                        FAQ
                    </FooterPageLink>
                    <FooterPageLink to="/contact-us" activeStyle>
                        Contact Us
                    </FooterPageLink>
                </FooterLinksMenu>
                <FooterLinkLogo to="/">
                    <img src={logo} alt='LOGO'/>
                </FooterLinkLogo>

            </FooterContainer>
        </>
    )
}

export default Footer
