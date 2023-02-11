import React, {Component} from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import './contact.css'

class Contact extends Component{
    render(){
        return(
            <div className="contact-container" id="contact">
                <h2 className="contact-title">Kev.xie24@gmail.com</h2>
                <div className="contact-list">
                    <a href="https://github.com/kersv" target='_blank' rel='noreferrer' className="icon-box">
                        <FaGithub className='icon-item'/>
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-xie-55b49418b/" target='_blank' rel='noreferrer' className="icon-box">
                        <FaLinkedin className='icon-item'/>
                    </a>
                </div>

            </div>
        )
    }
}

export default Contact