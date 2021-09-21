import styled from 'styled-components'


export const VideoFrame = styled.iframe`

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

export const VideoContainer = styled.div`
    display:flex;
    justify-content: center;
    margin: 0;
    @media screen and (max-width: 1000px) {
    height: 50vw;
    }
`
