import React from 'react'
import { VideoContainer, VideoFrame } from './videoComponentElements.js'

const Videocomponent = (props) => {
    return (
        <VideoContainer>
        <VideoFrame
            title={props.Title}
            src={props.Link}
            allow="autoplay; encrypted-media"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
        </VideoContainer>
            
    )
}

export default Videocomponent


