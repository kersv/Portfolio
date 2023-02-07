import React, {Component} from "react";
import './nav.css'

class Nav extends Component{
    render(){
        return(
            <div className='topNav' id='nav'>
                <ul className='navContainer'>
                    <a><li className='navItem'>Home</li></a>
                    <a><li className='navItem'>Resume</li></a>
                    <a href='#project'><li className='navItem'>Project</li></a>
                    <a href='#contact'><li className='navItem'>Contact</li></a>
                </ul>
            </div>
        )
    }
}
export default Nav