import styled from 'styled-components'

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;


`
export const FAQGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    /* left:0;
    bottom:0;
    right:0; */
`
export const FAQHeader = styled.div`
    display: flex;
    font-family: Encode Sans ebold; 
    color: #00205B;
    font-size: 24px;
    justify-content: center;
    
`
export const FAQQuestion = styled.div`
    color: #000;
    font-family: Encode Sans ebold; 
    padding: 5px 0;
    margin: 0 1rem;
    font-size: 16px;
    height: 100%;
    cursor: pointer;

`
export const FAQAnswer = styled.div`
    color: #000;
    padding: 5px 0;
    font-family: Encode Sans med; 
    margin: 0 1rem;
    font-size: 14px;
    height: 100%;
    cursor: pointer;

`
