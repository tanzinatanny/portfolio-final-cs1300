import React from "react";
import redesign from '../../images-portfolio/redesign.png';
import development from '../../images-portfolio/development.png';
import iterative from '../../images-portfolio/iterative.png';
import abtest from '../../images-portfolio/abtesting.png';


function Projects() {

    let projects = [
        {
            'id': 1,
            'type': 'Class Project',
            'title': 'Responsive Redesign',
            'desc': 'Redesigned a poorly designed website of a popular local upstate NY Pizza shop to make it an easier interface for customers to easily order pizza',
            'link': 'https://evening-oasis-52030.herokuapp.com/',
            'img': redesign,
        },
        {
            'id': 2,
            'type': 'Class Project',
            'title': 'Web App',
            'desc': 'Created a react web app that can sort and filter top rated NYT books, add to a cart, and show the total price',
            'link': 'https://serene-lowlands-36536.herokuapp.com/',
            'img': development,
        },
        {
            'id': 3,
            'type': 'Class Project',
            'title': 'A/B Testing',
            'desc': 'Tested two version with slightly different design of the same website on two different group of people to observe which version performed well in differing matrices',
            'link': 'https://lit-falls-46201.herokuapp.com/',
            'img': abtest,
        },
        {
            'id': 4,
            'type': 'Group Project',
            'title': 'Designing a Mobile App',
            'desc': 'Designed the innterface of a mobile app through iterative process for a startup that prepares healthy meals and delivers weekly to its customers',
            'link': 'https://salty-springs-77774.herokuapp.com/',
            'img': iterative,
        }
    ];
    return (
        <section className="projects">
            {
                projects.map( project => {
                    let even = project.id % 2 ? '' : 'project-even';

                    return <div className={`project ${even}`} key={project.id}>
                        <a className="project-img" href={project.link} alt="project">
                            <img className="project-img-img" src={project.img}/>
                        </a>
                        <div className="project-content" alt="project">
                            <span className="project-type">{project.type}</span>
                            <h2 className="project-title">{project.title}</h2>
                            <div className="project-title-separator"></div>
                            <p className="project-description">
                                {project.desc}
                            </p>
                            <a className="project-link link link--arrowed" href={project.link}>
                                <span>Find More</span>
                                <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                     viewBox="0 0 32 32">
                                    <g fill="none" stroke="#02B4AA" strokeWidth="1.5" strokeLinejoin="round"
                                       strokeMiterlimit="10">
                                        <circle className="arrow-icon--circle" cx="16" cy="16" r="12.12"></circle>
                                        <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                                    </g>
                                </svg>
                            </a>
                        </div>

                    </div>
                } )
            }
        </section>
    );
}

export default Projects;
