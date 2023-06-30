import React from "react";

function Contact(props){
    return(
      <div id='contact'>
        <h3>Email us!</h3>
        <div className='contact-input'>
        <input type='email' placeholder="apple@mail.com"/>

        <a href="#">Contact</a>
        
        </div>      
    </div>
    )
}
export default Contact;