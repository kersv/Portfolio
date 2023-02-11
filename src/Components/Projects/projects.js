import React,{Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './project.css'

class Project extends Component {
    
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll:1
            
        };
        return(
            <div className='project-container' id="project">
                <h2 >Projects</h2>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <div className="slider">
                        <Slider {...settings}>
                            <img className='ProjImg' src="https://i.imgur.com/tukS1cr.png" alt="CodenamesPhoto"></img>
                            <img className='ProjImg' src="https://i.imgur.com/L2Ee3Hb.png" alt="CodenamesPhoto"></img>
                            <img className='ProjImg' src="https://i.imgur.com/8Icq7Q5.png" alt="CodenamesPhoto"></img>
                        </Slider>
                    </div>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, Bootstrap, NodeJs and Django
                        </p>
                        <p className='projDesc'> 
                            Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
                        </p>
                    </div>
                </div><hr/>
                <div className='project'>
                    <div className="ProjName">Codenames</div>
                    <div className="slider">
                        <Slider {...settings}>
                            <img className='ProjImg' src="https://assets2.rockpapershotgun.com/codenames.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/codenames.jpg" alt="CodenamesPhoto"></img>
                            <img className='ProjImg' src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-website/codenamesonline2.jpg" alt="CodenamesPhoto"></img>
                            <img className='ProjImg' src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/screenshots/csm-website/codenamesonline3.jpg" alt="CodenamesPhoto"></img>
                        </Slider>
                    </div>
                    <div className="desc">
                        <p className="techStack">
                            TechStack: React, Javascript, Html, Css, Bootstrap, NodeJs and Django
                        </p>
                        <p className='projDesc'> 
                            Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player. The game is played with least four players, or any even number of players. Players are split into two teams: blue and red.
                        </p>
                    </div>
                </div><hr/>
        </div>
        )
    }
    

}
export default Project