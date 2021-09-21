import react from "react";
import MailChimp from "react-mailchimp-form"; 
import "./landingPage.css";


function MailChimpForm(props){
    return(
        <div>
            <MailChimp 
                action="https://qhacks.us14.list-manage.com/subscribe/post?u=f9a860635bf0e397ab5f86761&amp;id=903e13fb61"
                fields={[
                    {
                        name: "EMAIL",
                        placeHolder: "email",
                        type: "email",
                        required: true
                    }
                ]}

                messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for subscribing!",
                      error: "An unexpected internal error has occurred.",
                      empty: "You must write an e-mail.",
                      duplicate: "Too many subscribe attempts for this email address",
                      button: "SIGN UP"
                    }
                  }
                className = "mailChimpForm"
                buttonClassName = "formButton"
            />
        </div>
    );
}

export default MailChimpForm; 

