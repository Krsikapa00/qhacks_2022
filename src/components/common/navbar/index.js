import React from 'react'
import { NavLink, Nav, NavLinkMenu, Bars } from './navbarElements';
import logo from '../../../assets/images/logo/qhacksCrown-colored.svg';
const Navbar = () => {
    return (
        <>
            <Nav className="App-header">
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
                <NavLink to="/">
                    <img src={logo} alt='LOGO'/>
                </NavLink>
                <Bars> Bar </Bars>
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

