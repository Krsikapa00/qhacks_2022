import React from "react";
import './landingPage.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";


const postURL = "https://qhacks.us14.list-manage.com/subscribe/post?u=f9a860635bf0e397ab5f86761&id=903e13fb61"

export default function SignUpForm(props){
    return(
        <div>
            <MailchimpSubscribe 
                url={postURL}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}