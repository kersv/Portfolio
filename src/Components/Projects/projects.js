import React,{Component} from "react";
import './project.css'

class Project extends Component{

    render(){
        return(
            <div className='project-container' id="project">
                <h2 >Projects</h2>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt="CodenamesPhoto"></img>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, Bootstrap, NodeJs and Django
                        </p>
                        <p className='projDesc'> 
                            Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
                        </p>
                    </div>
                </div>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt="CodenamesPhoto"></img>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, Bootstrap, NodeJs and Django
                        </p>
                        <p className='projDesc'> 
                            Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
                        </p>
                    </div>
                </div>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt="CodenamesPhoto"></img>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, Bootstrap, NodeJs and Django
                        </p>
                        <p className='projDesc'> 
                            Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
                        </p>
                    </div>
                </div>
        </div>
        )
    }

}
export default Project