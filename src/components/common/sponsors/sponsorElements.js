import styled from "styled-components";

export const SponsorHeader = styled.h1`
    display: flex;
    font-family: Encode Sans ebold; 
    color: #00205B;
    text-align: center;
    justify-content: center;
`

export const SponsorLink = styled.a`
    display: flex;
    padding: 1rem 1rem;
`

export const SponsorKiloLogo = styled.img `
    width: 200px;
    
    @media screen and (max-width: 980px) { 
        width: 150px;
    }
    @media screen and (max-width: 460px) { 
        width: 100px;
        margin: 30px 0;
    }
`

export const SponsorMegaLogo = styled.img `
    width: 250px;
    
    @media screen and (max-width: 980px) { 
        width: 200px;
    }
    @media screen and (max-width: 460px) { 
        width: 150px;
        margin: 30px 0;
    }
`
export const SponsorGigaLogo = styled.img `
    width: 400px;
    
    @media screen and (max-width: 980px) { 
        width: 300px;
    }
    @media screen and (max-width: 460px) { 
        width: 250px;
        margin: 30px 0;
    }
`
export const SponsorTeraLogo = styled.img `
    width: 500px;
    
    @media screen and (max-width: 980px) { 
        width: 400px;
    }
    @media screen and (max-width: 460px) { 
        width: 350px;
        margin: 30px 0;
    }
`

export const SponsorGrid = styled.div`
    display: flex;
    /* height: auto; */
    padding: 1.5rem 0;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    
`
export const SponsorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`