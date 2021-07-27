import React from 'react'
import { NavLink, Nav, NavLinkMenu, NavLinkLogo, MobileLogoBtn } from './navbarElements';
import logo from '../../../../assets/images/logo/qhacksCrown-colored.svg';
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <MobileLogoBtn onClick={toggle}>
                    <img src={logo} alt='LOGO' />
                </MobileLogoBtn>
                <NavLinkMenu>
                    <NavLink to="/schedule" activeStyle>
                        Schedule
                    </NavLink> 
                    <NavLink to="/speakers" activeStyle>
                        Speakers
                    </NavLink>
                    <NavLink to="/sponsors" activeStyle>
                        Sponsors
                    </NavLink>
                    <NavLink to="/our-team" activeStyle>
                        Our Team
                    </NavLink>
                </NavLinkMenu>
                <NavLinkLogo to="/home">
                    <img src={logo} alt='LOGO'/>
                </NavLinkLogo>
                <NavLinkMenu>
                    <NavLink to="/testimonials" activeStyle>
                        Testimonials
                    </NavLink>
                    <NavLink to="/archive" activeStyle>
                        Archive
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

