import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import logo from '../../../assets/images/backgrounds/CircuitBoardGraphicFilledarkened.png';

export const FooterContainer = styled.nav`
    background-image: url(${logo});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    position: relative;
    left:0;
    bottom:0;
    right:0;
`

export const FooterSCLink = styled.a `
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    
    @media screen and (max-width: 850px) { 
        padding: 0 0;
    }
`
export const FooterPageLink = styled(Link)`
    color: #fff;
    padding: 5px 0;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 11px;
    
    height: 100%;
    cursor: pointer;
    &.active {
        // Currently just bolds the selected option (other than the logo)
        /* font-family: Encode Sans ebold;  */
        text-decoration: underline;
    }
`
export const FooterLinkLogo = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 2.5rem;
    height: 100%;
    cursor: pointer;
    
    @media screen and (max-width: 850px) {
        display: none;
    }
`
export const FooterLinksMenu = styled.div `
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    font-family: "Encode Sans sbold";
    font-variant: small-caps;
    align-items: center;
    color: white;
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    /* align-items: center; */
    /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
    
`

export const FooterMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    width: 70%;
    font-family: "Encode Sans sbold";
    font-variant: small-caps;
    align-items: center;
    color: white;

    
    @media screen and (max-width: 850px) {
        justify-content: space-between;
    }
`

;