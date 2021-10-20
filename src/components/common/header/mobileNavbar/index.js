import React from 'react'
import { MobileNav, MobilenavLink, MobilenavLinkMenu } from './mobileNavbarElements'

const MobileNavbar = ({isOpen, toggle}) => {
    return (
        <MobileNav isOpen={isOpen} onClick={toggle} >
           <MobilenavLinkMenu>
                    <MobilenavLink exact={true} to="/" activeStyle>
                        Home
                    </MobilenavLink>
                    <MobilenavLink to="/schedule" activeStyle>
                        Schedule
                    </MobilenavLink> 
                    <MobilenavLink to="/speakers" activeStyle>
                        Speakers
                    </MobilenavLink>
                    <MobilenavLink to="/sponsors" activeStyle>
                        Sponsors
                    </MobilenavLink>
                    {/* <MobilenavLink to="/our-team" activeStyle>
                        Our Team
                    </MobilenavLink> */}
                    <MobilenavLink to="/testimonials" activeStyle>
                        Testimonials
                    </MobilenavLink>
                    {/* <MobilenavLink to="/archive" activeStyle>
                        Archive
                    </MobilenavLink> */}
                    {/* <MobilenavLink to="/faq" activeStyle>
                        FAQ
                    </MobilenavLink> */}
                    <MobilenavLink to="/contact-us" activeStyle>
                        Contact Us
                    </MobilenavLink>
                </MobilenavLinkMenu> 
        </MobileNav>
    )
}

export default MobileNavbar
