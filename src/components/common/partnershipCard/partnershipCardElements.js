import styled from "styled-components";

export const PartnershipLogo = styled.img `
    width: 200px;
`

export const PartnershipHeader = styled.h1 `

`

export const Partnershiptext = styled.h2 `

`

export const PartnershipButton = styled.button `
    margin: 1rem 0;
    font-size: 16px;
`
export const PartnershipContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid black;
    border-radius: 15px;
    width: fit-content;
    padding: 1rem 1rem;
    margin: 0 0 2rem 0;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`
export const PartnershipGroup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`