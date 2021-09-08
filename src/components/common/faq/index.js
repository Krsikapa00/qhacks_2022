import React from 'react'
import { FAQAnswer,FAQHeader, FAQContainer, FAQGroup, FAQQuestion} from './faqElements.js'

const MLHconductLink = "https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
const FAQ = () => {
    return (
        <FAQContainer>
            <FAQHeader>Frequently Asked Questions</FAQHeader>
            <FAQGroup>
                <FAQQuestion> Will QHacks 2022 be in-person or virtual?</FAQQuestion>    
                <FAQAnswer> TBD</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion> Who is invited?</FAQQuestion>    
                <FAQAnswer> Any college or university student at any skill level! All you need is a passion for tech/data/design and a willingness to learn! We welcome applicants from all fields of study.</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion>Where is it?</FAQQuestion>    
                {/* NEED TO CONFIRM THIS QUESTION */}
                <FAQAnswer> QHacks is entirely virtual! Follow our social media for announcements!</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion>What is a Hackathon?</FAQQuestion>    
                <FAQAnswer> A hackathon is a sprint-like competition where people from a variety of backgrounds come together to collaborate on software and hardware projects!</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion> How much does it cost to attend?</FAQQuestion>    
                <FAQAnswer> Absolutely nothing! Not one penny. (Remember those?)</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion> What if I don’t have a team?</FAQQuestion>    
                <FAQAnswer> Not to worry! We'll have a team-formation session prior to the hackathon for you to find people you’d like to work with. There will be plenty of other people in the same situation, and we’ll have you up and running in no time!</FAQAnswer>
            </FAQGroup>    
            <FAQGroup>
                <FAQQuestion> Is there a Code of Conduct?</FAQQuestion>    
                <FAQAnswer> Yes! Hackers are expected to adhere to the <a href={MLHconductLink}>Major League Hacking Code of Conduct.</a> </FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion> Can I work on a past project?</FAQQuestion>    
                <FAQAnswer> No. All projects must be started from scratch at the event.</FAQAnswer>
            </FAQGroup>
            <FAQGroup>
                <FAQQuestion> How do I apply?</FAQQuestion>    
                <FAQAnswer> Follow our social media and check back here to see when applications will be released! Remember, you don't need to be an expert hacker or to have been to a hackathon before - we just want to see what makes you creative and unique!</FAQAnswer>
            </FAQGroup>  
            <FAQGroup>
                <FAQQuestion> Have additional questions?</FAQQuestion>    
                <FAQAnswer> Feel free to reach out to us at <a href="mailto:hello@qhacks.io">hello@qhacks.io</a> or on our <a href="https://linktr.ee/QHacks">social media</a> direct messages!</FAQAnswer>
            </FAQGroup>    



        </FAQContainer>
    )
}

export default FAQ
