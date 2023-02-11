import React, {Component} from 'react'
import './intro.css'

class Intro extends Component{
    render(){
        return(
            <div className='Intro' id='intro'>
                <div className='intro-desc'>
                    <h2 className='name'>Kevin Xie</h2>
                    <p>Web Developer</p> 
                </div>
            </div>
        )
    }
}

export default Intro