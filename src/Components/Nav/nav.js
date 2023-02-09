import React, {Component} from "react";
import './nav.css'

class Nav extends Component{
    render(){
        return(
            <div className='topNav' id='nav'>
                <div className='navContainer'>
                    <a><div className='navItem'>Home</div></a>
                    <a download href='/KevinXie.pdf'><div className='navItem'>Resume</div></a>
                    <a href='#project'><div className='navItem'>Project</div></a>
                    <a href='#contact'><div className='navItem'>Contact</div></a>
                </div>
            </div>
        )
    }
}
export default Nav