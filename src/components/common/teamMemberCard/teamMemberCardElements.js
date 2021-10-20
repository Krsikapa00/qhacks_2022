import styled from "styled-components";


export const Container = styled.div `
    border-radius: 15px;
    width: 225px;
    min-width: 175px;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-bottom: 1rem;
    margin: 0 10px;

    @media screen and (max-width: 980px) { 
        width: 175px;
    }
`

export const Headshot = styled.img `
    display: flex;
    height: 180px;
    width: 180px;
    border: 3px solid #00205B;
    border-radius: 50%;
    margin: 1rem 0 ;
    @media screen and (max-width: 980px) { 
        height: 140px;
        width: 140px;
    }

`
export const TextGroup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MemberName = styled.h3 `
    color: #00205B;
    font-family: "Encode Sans bold";
    padding: 0 1px;
    font-size: 22px;

    @media screen and (max-width: 980px) {
        font-size: 18px;
    }


`

export const MemberPosition = styled.h2 `
    display: flex;
    font-family: "Encode Sans reg";
    font-size: 18px;

    @media screen and (max-width: 980px) {
        font-size: 16px;
    }
`