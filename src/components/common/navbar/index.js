import React from 'react'
import { NavLink, Nav, NavMenu, NavLinkImg } from './navbarElements';
import logo from '../../assets/images/logo/LogoTricolor.png';
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" activeStyle>
                    <img src={require('../../assets/images/logo/LogoTricolor.png')} alt="Logo" />
                </NavLink>
                {/* <Bars /> */}
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/schedule" activeStyle>
                        Schedule
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;

