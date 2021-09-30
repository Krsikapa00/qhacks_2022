import styled from "styled-components";

export const TestimonialsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 530px;
    height: 375px;
    border: 2px solid rgb(232, 232, 232);
    border-radius: 15px;
    padding: 48px;
    box-shadow: rgb(7 16 75 / 10%) 4px 7px 20px 2px;
    margin: 1rem 2rem;
    



    @media screen and (max-width: 1200px){
        width: 450px;
        height: 325px;
        justify-content: center;
    } 

    @media screen and (max-width: 625px){
        width: 100%;
        height: 100%;
        justify-content: center;
    }

`
export const TestimonialHeader = styled.h1`
    display: flex;
    font-family: Encode Sans ebold; 
    color: #00205B;
    text-align: center;
    justify-content: center;
`

export const TestimonialTopGroup = styled.div `
    display: flex;
    flex-direction: row;
    font-family: Encode Sans med; 
    margin-bottom: 20px;

    @media screen and (max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
`

export const TestimonialTextGroup = styled.div `
    display: flex; 
    flex-direction: column;
    margin-left: 28px;



`

export const TestimonialText = styled.p `
    font-family: Encode Sans reg; 
    line-height: 32px;

    @media screen and (max-width: 1200px){
        line-height: 24px;
        font-size: 14px;
    } 

`

export const TestimonialImageContainer = styled.div `
    border-radius: 50%;
    padding: 1px;
    border-color: #00205B;

`

export const TestimonialImage = styled.img `
    display: flex;
    width: auto;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    width: 72px;
    height: 72px;
    /* border: 2.5px solid #00205B; */
    border-radius: 50%;
`

export const TestimonialName = styled.h3 `
    padding: 5px 0;
    font-family: Encode Sans bold; 

`
export const TestimonialProject = styled.h2 `

    font-family: Encode Sans med; 
`