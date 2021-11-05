import React from 'react'
import { FooterContainer, FooterSCLink, FooterMenu, FooterPageLink, FooterLinksMenu, FooterLinkLogo, FooterHeadings } from './footerElements';
import facebook from '../../../assets/icons/socialFacebook.svg'
import instagram from '../../../assets/icons/socialInstagram.svg'
import linkedin from '../../../assets/icons/socialLinkedin.svg'
import twitter from '../../../assets/icons/socialTwitter.svg'
import mail from '../../../assets/icons/socialMail.svg'
import logo from '../../../assets/images/logo/qhacksCrown-white.svg';



const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterMenu> 
                    <FooterSCLink href="https://www.instagram.com/qhacks21/" target="_blank" rel="noreferrer">
                            <img src={instagram} alt={'Instgram'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://twitter.com/QHacks21" target="_blank" rel="noreferrer">
                            <img src={twitter} alt={'Twitter'}/>
                    </FooterSCLink>
                    <FooterSCLink href="mailto:hello@qhacks.io" target="_blank" rel="noreferrer">
                            <img src={mail} alt={'Mail'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://www.linkedin.com/company/qhacks/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt={'Linkedin'}/>
                    </FooterSCLink>
                    <FooterSCLink href="https://fb.com/qhacks" target="_blank" rel="noreferrer">
                            <img src={facebook} alt={'Facebook'}/>
                    </FooterSCLink>
                </FooterMenu>
                <FooterLinksMenu>
                    <FooterPageLink href="https://2020.qhacks.io/" target="_blank" rel="noreferrer">
                            Qhacks 2020
                    </FooterPageLink>
                    <FooterPageLink href="https://localhackday.mlh.io/" target="_blank" rel="noreferrer">
                            Local Hack Day
                    </FooterPageLink>
                    <FooterPageLink href="https://medium.com/@qhacks" target="_blank" rel="noreferrer">
                            QHacks Blog
                    </FooterPageLink>
                    <FooterPageLink href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" target="_blank" rel="noreferrer">
                            Hack Day tips
                    </FooterPageLink>
                    <FooterPageLink href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noreferrer">
                            MLH Code of Conduct
                    </FooterPageLink>
                </FooterLinksMenu>
                <FooterHeadings>Queen's University | 99 University Ave, Kingston, ON</FooterHeadings>
                <FooterHeadings><a href="https://github.com/qhacks/qhacks-website/tree/dev-2020" target="_blank" rel="noreferrer" style={{textDecoration: "none", color: "#bebebe"}} > {"</>"} with ♡ by Queen's students</a></FooterHeadings>
                <FooterHeadings>Copyright © 2021 QHacks</FooterHeadings>

            </FooterContainer>
        </>
    )
}

export default Footer
