import styled from "styled-components";


export const Container = styled.div `
    /* border: px solid #00205B; */
    box-shadow: rgb(7 16 75 / 10%) 4px 7px 20px 2px;
    width: 225px;
    display: flex;
    flex-direction: column;
    align-items:center;
    padding-bottom: 1rem;
`

export const Headshot = styled.img `
    display: flex;
    height: 160px;
    width: 160px;
    border: 3px solid #00205B;
    border-radius: 50%;
    margin: 1.5rem 0 ;
`
export const TextGroup = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MemberName = styled.h2 `
    color: #00205B;
    font-family: "Encode Sans bold";
    padding: 0 1px;
`

export const MemberPosition = styled.h3 `
    display: flex;
    font-family: "Encode Sans reg";

`