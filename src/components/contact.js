import React from 'react';
import {Element} from 'react-scroll';
import {IconButton} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import './contact.css';

const Contact = ()=> {
    return (
        <Element className="contact" id="contact">
           <h1>Contact</h1>
           <div className="contact_container">
           <p>
               Email:<span>prasannagadarla@gmail.com</span>
               </p>
               <p>
                   Github username:<span>Laxmiprasannachukka</span>
                   </p>
                   <div className="contact_icons">
                   <a href="google.com">
                   <IconButton>
                       <GitHubIcon/>
                       </IconButton>
                       </a>
                       <a href="google.com">
                   <IconButton>
                       <LinkedInIcon/>
                       </IconButton>
                       </a>
                       <a href="google.com">
                   <IconButton>
                       <EmailIcon/>
                       </IconButton>
                       </a>
                   </div>
           </div>

            </Element>
    )
}



export default Contact;
