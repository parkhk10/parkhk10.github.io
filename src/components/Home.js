import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom';

import SugarsThumb from './SugarsThumb';

const Home = () => {
    return(
        <div className="">
            <main class="home-main">
                <section id="intro-blurb">
                    <h1>Hi, I'm Keren.</h1>
                    <p>I’m a front-end developer and a design enthusiast.</p>
                    <p>Driven by passion for creating thoughtful experiences 
                        that empower others.</p>
                    <div id="intro-icons">
                        <a href="mailto:hakyungpark2020@u.northwestern.edu"><FontAwesomeIcon icon={faEnvelope} className="fa-lg" id="envelope-icon"/></a>
                        <a href="https://github.com/parkhk10" target="_blank"><FontAwesomeIcon icon={faGithub} className="fa-lg"id="github-icon"/></a>
                        <a href="https://linkedin.com/in/hkpark10" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="fa-lg" id="linkedin-icon"/></a>
                    </div>
                </section> 
                <br />
                <br />
                <div id="home-projects">
                    <div className="project-display-row">
                        <SugarsThumb />
                        <div className="project-display-caption">
                            <div>
                                <h4 className="project-title"><a href="/sugars"><Link to="/sugars">How do we digest sugars?</Link></a></h4>
                                <span>information visualization</span>
                            </div>
                        </div>
                    </div>
                    <div className="project-display-row">
                        <img src="./images/airbnb.png"/>
                            <div className="project-display-caption">
                                <div>
                                    <h4 className="project-title">How can Airbnb increase customer loyalty?</h4>
                                    <span>service design</span>
                                </div>
                            </div>
                    </div>
                    <div className="project-display-row">
                        <img src="./images/majors.png"/>
                            <div className="project-display-caption">
                                <div>
                                    <h4 className="project-title">How should I select my college major?</h4>
                                    <span>information visualization</span>
                                </div>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;