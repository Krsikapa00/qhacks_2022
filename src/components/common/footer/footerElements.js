import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const FooterContainer = styled.nav`
    background: #9B9B9B;
    /* height: 80px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem calc((100vw - 1200px) /2);
    z-index: 100;
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
    color: #000;
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
        font-family: Encode Sans ebold; 
    }
    @media screen and (max-width: 850px) { 
        /* font-size: 8px; */
        /* margin: 0; */
    }
`

export const FooterLinksMenu = styled.div `
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0;
    font-family: "Encode Sans sbold";
    background-color: #9B9B9B;
    font-variant: small-caps;
    align-items: center;
    color: white;
    width: 70%;
    display: flex;
    flex-wrap: wrap
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
    background-color: #9B9B9B;
    font-variant: small-caps;
    align-items: center;
    color: white;

    
    @media screen and (max-width: 850px) {
        justify-content: space-between;
    }
`

;