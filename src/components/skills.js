import React from 'react';
import {Element} from 'react-scroll';
//import skillimg from '../assets/skillimage.jpg';
import LinearProgress from '@material-ui/core/LinearProgress';
import './skills.css';

const Skills = () => {
    return (
        <Element className="skillcontainer" id="skills">
       {/** <div className="skillcontainer_image">
        <img src={skillimg} alt=""/>
        </div>
    **/ }
        <div className="skillcontainer_text">
        <h1>SKILLSET</h1>
         <div className="skillcontainer_skillset">
         <h5>React</h5>
         <div className="skillcontainer_slider skillContainer_slider1">
         <LinearProgress variant="determinate" value={80}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>NodeJS</h5>
         <div className="skillcontainer_slider skillContainer_slider2">
         <LinearProgress variant="determinate" value={70}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>Express</h5>
         <div className="skillcontainer_slider skillContainer_slider3">
         <LinearProgress variant="determinate" value={70}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>MongoDB</h5>
         <div className="skillcontainer_slider skillContainer_slider4">
         <LinearProgress variant="determinate" value={80}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>Javascript</h5>
         <div className="skillcontainer_slider skillContainer_slider5">
         <LinearProgress variant="determinate" value={80}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>HTML</h5>
         <div className="skillcontainer_slider skillContainer_slider6">
         <LinearProgress variant="determinate" value={90}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>css</h5>
         <div className="skillcontainer_slider skillContainer_slider7">
         <LinearProgress variant="determinate" value={90}/>
         </div>
         </div>
         <div className="skillcontainer_skillset">
         <h5>Bootstrap</h5>
         <div className="skillcontainer_slider skillContainer_slider8">
         <LinearProgress variant="determinate" value={90}/>
         </div>
         </div>
        </div>
        </Element>
            
    )
}


export default Skills;
