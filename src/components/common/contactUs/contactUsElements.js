import styled from 'styled-components'


export const ContactUsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContactUsColumns = styled.div`
    display: flex;
    flex-direction: row;
    /* fle: 2fr 1fr */
`
export const ContactUsHeader = styled.h1`
    display: flex;
    font-family: Encode Sans ebold; 
    color: #00205B;
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
    width: 800px;
    /* height: 300px; */

    @media screen and (max-width: 1215px) {
        width: 400px;
        height: 225px;
    }
    @media screen and (max-width: 1000px) {
        padding-Top: 40px;
        width: 80%;
        height: 90%;
    }
    @media screen and (max-width: 700px) {
        padding-Top: 40px;
        width: 100%;
        height: 100%;
    }
`


export const ContactUsSCLink = styled.a `
    color: #fff;
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
export const ContactUsSCGroup = styled.div`
    display: flex;
    flex-direction: row;
`
export const ContactUsSCContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;

`
export const ContactUsSCTitle = styled.div`
    display: flex;
`