import styled from "styled-components";

export const TestimonialsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 530px;
    height: 375px;
    border: 1px solid rgb(232, 232, 232);
    border-radius: 15px;
    padding: 48px;
    box-shadow: rgb(7 16 75 / 10%) 4px 7px 20px 2px;


    @media screen and (max-width: 650px){
        width: 100%
    }

`

export const TestimonialTopGroup = styled.div `
    display: flex;
    flex-direction: row;
    font-family: Encode Sans med; 
    margin-bottom: 20px;
`

export const TestimonialTextGroup = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 28px;
`

export const TestimonialText = styled.p `
    font-family: Encode Sans reg; 
    line-height: 32px;

`

export const TestimonialImageContainer = styled.div `
    border-radius: 50%;
    border-color: #00205B;

`

export const TestimonialImage = styled.img `
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    width: 72px;
    border: 1px black;
    border-radius: 50%;
`

export const TestimonialName = styled.h2 `
    padding: 5px 0;

`
export const TestimonialProject = styled.h3 `

`