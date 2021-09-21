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
                className = "mailChimpForm"
                buttonClassName = "formButton"
            />
        </div>
    );
}

export default MailChimpForm; 

