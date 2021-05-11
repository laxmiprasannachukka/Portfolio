import React from 'react';
import {Element} from 'react-scroll';
import Project from './project.js';
import './projects.css';

const Projects = () => {
    const projects = [
        {
            img: "https://hackernoon.com/hn-images/1*cCdSJ0mOqjQkm-soL5hlIw.jpeg",
            title: "URL_Shortner",
            desc: "URL shorner app using MERN STACK",
            link: "https://urlshortnerprasanna12.herokuapp.com"

        },
        {
            img: "https://miro.medium.com/max/700/1*NW5Hhpv4Gckxynr5U-MZwA.jpeg",
            title: "Portfolio Website",
            desc: "Built my portfolio with React",
            link: "www.google.com"

        }
    ];
    return (
        <Element className="projectcontainer" id="projects">
            <h1>PROJECTS </h1>
            <p> Here are some projects which I done for making lives of people easy.
                </p>
            <div className="projectContainer_projects">
                {
                    projects.map((project, index) => {
                        return (
                            <Project key={index} img={project.img} title={project.title} desc={project.desc}
                                link={project.link} />
                        );
                    })
                }

            </div>
        </Element>
    )
}

export default Projects;
