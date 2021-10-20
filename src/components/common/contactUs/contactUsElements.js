import styled from 'styled-components'


export const ContactUsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
`

export const ContactUsColumns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`
export const ContactUsHeader = styled.h1`
    display: flex;
    font-family: Encode Sans ebold; 
    color: #00205B;
    text-align: center;
    justify-content: center;
`

export const ContactUsImageContainer = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
`
export const ContactUsImage = styled.img`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    height: 520px;

    @media screen and (max-width: 1215px) {
        width: 500px;
        height: 380px;
    }
    @media screen and (max-width: 850px) {
        /* padding-Top: 40px; */
        width: 80%;
        height: 90%;
    } 
    @media screen and (max-width: 700px) {
        display: none;
    }
`


export const ContactUsSCLogo = styled.img `
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 2rem 0 0;
    height: 100%;
    cursor: pointer;
    width: 48px;
    
    /* @media screen and (max-width: 850px) { 
        padding: 0 0;
    } */
`
export const ContactUsSCGroup = styled.a`
    display: flex;
    flex-direction: row;
    margin: 1.5rem 2rem;
    align-items: center;
    text-decoration: none;
    color: #000;

`
export const ContactUsSCContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    justify-content: center;
    
`
export const ContactUsSCTitle = styled.h2`
    display: flex;
    text-decoration: none;
    font-family: Encode Sans sbold; 


`