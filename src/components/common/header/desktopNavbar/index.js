import React from 'react'
import { NavLink, Nav, NavLinkMenu, NavLinkLogo, MobileLogoBtn } from './navbarElements';
import logo from '../../../../assets/images/logo/qhacksCrown-black.svg';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <MobileLogoBtn onClick={toggle}>
                    <img src={logo} alt='LOGO' />
                </MobileLogoBtn>
                <NavLinkMenu>
                <NavLink to="/" exact={true} >
                        Home
                    </NavLink> 
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
                    {/* <NavLink to="/archive" >
                        Archive
                    </NavLink> */}
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

