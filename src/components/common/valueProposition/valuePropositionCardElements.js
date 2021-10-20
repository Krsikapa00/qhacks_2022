import styled from 'styled-components'

export const OsGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const OsIconGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const OsImageContainer = styled.div`
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
`
export const OsImage = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 475px;
    height: 300px;

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

export const OsTitle = styled.h1`
    font-family: "Encode Sans bold";
    color: #00205b;
    padding-top: 2px;
`

export const OsText = styled.p`
    font-family: "Encode Sans med";
    line-height: 26px;
    
`

export const OsDivider = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1fr 1fr 1fr;
    padding: 10px 0 15px 0;
  
`
export const OsContainer = styled.div`
    display: grid;
    padding: 40px 55px 40px 55px;
    column-gap: 3rem;
    grid-template-columns: 1fr 1fr;
    justify-content: center;

    @media screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
`
export const OsBucket = styled.div`
    display: block;
    margin-bottom: 120px;
`