import React,{Component} from "react";
import './project.css'

class Project extends Component{

    render(){
        return(
            <div className='project-container' id="project">
                <h2 >Projects</h2>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt></img>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, NodeJs, Bootstrap, Django
                        </p>
                        <p className='projDesc'> 
                            Aute dolore proident eiusmod consequat est sint eu. Aute velit deserunt nulla dolore voluptate enim eu labore aute consequat et. Culpa reprehenderit eiusmod magna nisi anim culpa in.
                        </p>
                    </div>
                </div>
        </div>
        )
    }

}
export default Project