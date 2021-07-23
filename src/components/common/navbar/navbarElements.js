import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1200px) /2);
    z-index: 100;
`


export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

export const NavLinkMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    @media screen and (max-width: 850px) {
        display: none;
    }
`

export const Bars = styled.div`
  display: none;
  color: #fff;
  @media screen and (max-width: 850px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;