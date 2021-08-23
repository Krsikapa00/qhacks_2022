import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const MobileNav = styled.aside`
position: fixed;
z-index: 1000;
width: 100%;
height: 100%;
background: #fff;
display: grid;
align-items: center;
top: 0;
left:0;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const MobilenavLinkMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(9, 80px);
text-align: center;
font-family: "Encode Sans sbold";
background-color: #fff;
font-variant: small-caps;

@media screen and (max-width: 500px) {
    grid-template-rows: repeat(9, 60px);
}
`



export const MobilenavLink = styled(Link)`
color:#000;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
&.active {
        // Currently just bolds the selected option (other than the logo)
        font-family: Encode Sans ebold; 
    }
`