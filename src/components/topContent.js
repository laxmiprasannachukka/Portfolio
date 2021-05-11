import React from 'react';
import { Link } from 'react-scroll';
import mypic from '../assets/mypic.jpg';
import "./topContent.css";

const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent_container">
            <img src={mypic} alt=""/>
                <h1>Hey,I'm Prasanna!</h1>
                <p>I'm currently Exploring new Opportunities to work as a Full Stack Web Developer.</p>

                <a href="https://drive.google.com/file/d/1Aes11CsFMlR6CjURSmAGzLju1OTHcxga/view?usp=sharing">
                    <button className="topContent_download">Download CV</button>
                </a>
                <Link to='projects' smooth={true} duration={500}>
                    <button className="topContent_work">My work</button>
                </Link>
            </div>
        </div>
    )
}


export default TopContent;
