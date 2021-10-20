import React from 'react'
import '../App.css';
import { TestimonialCard } from '../components/common'
import jordanCurnew from '../assets/images/testimonialHeadshots/Jordan_Curnew.jpg'
import amyLu from '../assets/images/testimonialHeadshots/amyLu.png'
import benjaminBeggs from '../assets/images/testimonialHeadshots/Benjamin_Beggs.jpg'
import cooperLeong from '../assets/images/testimonialHeadshots/cooperLeong.png'
import jacobLaframboise from '../assets/images/testimonialHeadshots/jacobLaframboise.jpg'
import gregWang from '../assets/images/testimonialHeadshots/Greg_Wang.jpg'
import { TestimonialHeader } from '../components/common/testimonialCard/testimonialsCardElements'

const Testimonials = () => {
    return (
        <div  className="sidePadding"
            style={{
                display: 'flex',
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "115px"
            }}>

        <TestimonialHeader>Our Testimonials</TestimonialHeader>
        <div 
            style={{
                display: 'flex',
                flexWrap: "wrap",
                justifyContent: "center",
            }}
            >
                
            <TestimonialCard name="Jordan Curnew" project="Parallel Fourier Computing" projectLink="https://devpost.com/software/parallel-fourier-computing" headshot={jordanCurnew} bordercolor="#00205B"
                testimonial="QHacks provided an exciting opportunity to put the skills I’ve learned in school to the test and network with industry professionals (which led to a job offer!). My team built an application for computing Fourier Transforms utilizing parallel processing on a distributed network – I never thought I’d be able to make something like that in 36 hours!"
            />

            <TestimonialCard name="Amy Lu" project="Reeltube" projectLink="https://devpost.com/software/qhacks-v1" headshot={amyLu} bordercolor="#fedb01"
                testimonial="In high school, I’d never opened a single computer science course brochure, and now I will be an incoming graduate student in machine learning. QHacks gave me a taster of what tech really was - a creative endeavour with technical tools as the paint brush, and societal-level solution pitching as the frame."
            />
            <TestimonialCard name="Cooper Leong" project="ESPECT" projectLink="https://devpost.com/software/espect" headshot={cooperLeong} bordercolor="#00205B"
                testimonial="Events such as QHacks have allowed me to delve into topics without fear. I used to find it time consuming and intimidating to learn enough to feel confident about a topic, but now I can tackle it head on. It has been just under a year since my first hackathon, and I can say that it has changed my life for the best, and I look forward to participating in many more!                "
            />
            <TestimonialCard name="Benjamin Beggs" project="Parallel Fourier Computing" projectLink="https://devpost.com/software/parallel-fourier-computing" headshot={benjaminBeggs} bordercolor="#c81c2e"
                testimonial="QHacks 2021 gave me the opportunity to showcase my problem-solving and creativity in a team setting while working on the Parallel Fourier Computing project. The hackathon is also filled with great networking and knowledge building sessions which make this 36-hour event a deeply enriching and valuable experience."
            />            
            <TestimonialCard name="Jacob Laframboise" project="No Spoiling!" projectLink="https://devpost.com/software/qhacks-zgmlxr" headshot={jacobLaframboise} bordercolor="#00205B"
                testimonial="QHacks was an exciting environment to learn and code in, and I really enjoyed the challenge. The sponsors were really cool and the event was a lot of fun!"
            />

            <TestimonialCard name="Greg Wang" project="Beat Party" projectLink="https://devpost.com/software/beatparty" headshot={gregWang} bordercolor="#00205B"
                testimonial="Qhacks was a great experience that taught me a lot about how to stay productive whilst under a time limit. I had a fun time and was proud of the project our group created in just 48 hours."
            />
        </div>
        </div>
    
    )
}

export default Testimonials
