import styled from "styled-components";

export const PartnershipLogo = styled.img `
    width: 150px;
    margin: 1rem 1.5rem;
`

export const PartnershipHeader = styled.h1 `
    font-family: Encode Sans bold; 

`

export const Partnershiptext = styled.h2 `
    font-family: Encode Sans sbold; 

`

export const PartnershipButton = styled.button `
    margin: 1rem 0;
    font-size: 24px;
    font-variant: small-caps;
    color: #B21B39;
    background-color: #fff;
    border: solid #B21B39;
    padding: 1rem 4rem;
    font-family: Encode Sans bold; 
    border-radius: 15px
`
export const PartnershipContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: solid #00205B ;
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