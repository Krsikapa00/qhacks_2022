import React from 'react'
import { TestimonialImage, TestimonialName, TestimonialImageContainer, TestimonialProject, TestimonialsContainer, TestimonialText, TestimonialTextGroup, TestimonialTopGroup } from './testimonialsCardElements'

const TestimonialCard = (props) => {
    return (
        <TestimonialsContainer >
            <TestimonialTopGroup>
                <TestimonialImage  src={props.headshot}/>
                <TestimonialTextGroup>
                    <TestimonialName>{props.name}</TestimonialName>
                    <TestimonialProject>Project: {props.project}</TestimonialProject>
                </TestimonialTextGroup>
            </TestimonialTopGroup>
            <TestimonialText>{props.testimonial}</TestimonialText>
        </TestimonialsContainer>
    )   
}

export default TestimonialCard
