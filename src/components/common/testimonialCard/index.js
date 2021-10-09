import React from 'react'
import { TestimonialImage, TestimonialName, TestimonialImageContainer, TestimonialProject, TestimonialsContainer, TestimonialText, TestimonialTextGroup, TestimonialTopGroup } from './testimonialsCardElements'

const TestimonialCard = (props) => {
    let projectComp = <TestimonialProject>Project: {props.project}</TestimonialProject>
    if(props.projectLink)
        projectComp = <TestimonialProject>Project: <a href={props.projectLink} target="_blank" style={{fontSize: '20px'}}>{props.project}</a></TestimonialProject>
    return (
        <TestimonialsContainer >
            <TestimonialTopGroup>
                <TestimonialImage  src={props.headshot}/>
                <TestimonialTextGroup>
                    <TestimonialName>{props.name}</TestimonialName>
                    {projectComp}
                </TestimonialTextGroup>
            </TestimonialTopGroup>
            <TestimonialText>{props.testimonial}</TestimonialText>
        </TestimonialsContainer>
    )   
}

export default TestimonialCard
