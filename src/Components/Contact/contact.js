import React, {Component} from "react";
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact-container" id="contact">
                <h2 className="contact-title">Contact</h2>
                <ul className="contact-list">
                    <a href='https://github.com/kersv' target='_blank'><li>Github</li></a>
                    <a href='https://www.linkedin.com/in/kevin-xie-55b49418b/' target='_blank'><li>Linkedin</li></a>
                    <li>Email</li>
                    <li>Phone</li>
                </ul>
            </div>
        )
    }
}

export default Contact