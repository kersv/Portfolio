import React, {Component} from "react";
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact-container" id="contact">
                <h2 className="contact-title">Contact</h2>
                <div className="contact-list">
                    <img className="contact-item" src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="contact-icon"></img>
                    <img className="contact-item" src='https://cdn-icons-png.flaticon.com/512/145/145807.png' alt="contact-icon"></img>
                    <img className="contact-item" src='https://www.seekpng.com/png/full/41-415678_email-icon-vector-circle.png' alt="contact-icon"></img>
                    <img className="contact-item" src='https://cdn-icons-png.flaticon.com/512/6596/6596115.png' alt="contact-icon"></img>
                </div>
            </div>
        )
    }
}

export default Contact