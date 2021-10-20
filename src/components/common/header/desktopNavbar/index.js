import React from 'react'
import { NavLink, Nav, NavLinkMenu, NavLinkLogo, MobileLogoBtn, NavMLHLink } from './navbarElements';
import logo from '../../../../assets/images/logo/qhacksCrown-black.svg';
import mlhlogo from '../../../../assets/images/logo/mlh-trust-badge-2021-gray.svg';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <MobileLogoBtn onClick={toggle}>
                    <img src={logo} alt='LOGO' />
                </MobileLogoBtn>
                <NavLinkMenu>
                    <NavMLHLink href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=gray" target="_blank">
                        <img src={mlhlogo} alt='LOGO'/>
                    </NavMLHLink>
                    <NavLink to="/schedule" >
                        Schedule
                    </NavLink> 
                    
                    <NavLink to="/speakers" >
                        Speakers
                    </NavLink>
                    
                    <NavLink to="/testimonials" >
                        Testimonials
                    </NavLink>
                </NavLinkMenu>
                <NavLinkLogo to="/">
                    <img src={logo} alt='LOGO'/>
                </NavLinkLogo>
                <NavLinkMenu>
                <NavLink to="/sponsors" >
                        Sponsors
                    </NavLink>
                    <NavLink to="/our-team" >
                        Our Team
                    </NavLink>
          
                    <NavLink to="/faq" activeStyle>
                        FAQ
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                        Contact Us
                    </NavLink>
                    
                </NavLinkMenu>
            </Nav>
        </>
    )
}

export default Navbar;

