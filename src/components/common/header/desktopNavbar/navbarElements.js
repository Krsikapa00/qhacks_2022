import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    display: flex;
    justify-content: center;
    z-index: 100;
`

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active {
        // Currently just bolds the selected option (other than the logo)
        font-family: Encode Sans ebold; 
    }
`
export const NavLinkLogo = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 5rem;
    height: 100%;
    cursor: pointer;


    @media screen and (max-width: 1200px) {
        padding: 0 3rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 0 1.5rem;
    }
    @media screen and (max-width: 850px) {
        display: none;
    }
`
export const MobileLogoBtn = styled.button`
    display: none;
    background: none;
    border: none;
    width: 0px;
    height: 0px;
    
    
    @media screen and (max-width: 850px) {
        color: #000;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 2.5rem;
        height: 100%;
        width: auto;
        cursor: pointer;
    }
`

export const NavLinkMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    font-family: "Encode Sans sbold";
    background-color: #fff;
    font-variant: small-caps;
    align-items: center;
    padding: 0 1.5rem;
    font-size: 14px;
    color: white;
    @media screen and (max-width: 850px) {
        display: none;
    }
`

;