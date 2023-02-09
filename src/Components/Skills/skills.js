import React,{Component} from "react"
import './skills.css'

class Skills extends Component{
    render(){
        return(
            <div className="skill-container">
                <h2 className="topic">Skills</h2>
                <div className="grid">
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/732/732212.png' alt="icon"></img>
                        <p>Html</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/732/732190.png' alt="icon"></img>
                        <p>Css</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/919/919828.png' alt="icon"></img>
                        <p>Javascript</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt="icon"></img>
                        <p>React</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' alt="icon"></img>
                        <p>Redux</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' alt="icon"></img>
                        <p>Firebase</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968358.png' alt="icon"></img>
                        <p>Sass</p>
                    </div>
                    <div className="icon-container">
                        <img className="skill-icon" src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png' alt="icon"></img>
                        <p>Python</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills