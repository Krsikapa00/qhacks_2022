import styled from "styled-components";

export const TeamContainer = styled.div `
  display: flex;
    padding: 1rem 0;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    color: #00205B;
    border-radius: 15px;
    text-align: center;
    margin-bottom: 2rem;

`

export const PortfolioContainer = styled.div `
    width: 100%;
    margin: 15px 0px;
`


export const PortfolioTitle = styled.h1 ` 
    text-align: center
`

export const TeamMembersGroup = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;

    @media screen and (max-width: 980px) { 
        justify-content: center;
    }

`