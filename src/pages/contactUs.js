import React from 'react'
import { ContactUsCard } from '../components/common'
import FAQ from '../components/common/faq'
import "../App.css";

const ContactUs = () => {
    return (
            <div className="sidePadding">
                <FAQ/>
                <div style={{height: '50px'}}/>
                <ContactUsCard/>
            </div>
    )
}

export default ContactUs
