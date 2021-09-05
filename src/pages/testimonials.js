import React from 'react'
import { TestimonialCard } from '../components/common'
import amyLu from '../assets/images/testimonialHeadshots/amyLu.png'

const Testimonials = () => {
    return (
        <div>
            <TestimonialCard name="Nicholas Krsikapa" project="Project name" headshot={amyLu} bordercolor="#00205B"
                testimonial="Qhacks was a great experience that taught me a lot about how to stay productive whilst under a time limit. I had a fun time and was proud of the project our group created in just 48 hours."
            />
        </div>
    )
}

export default Testimonials
