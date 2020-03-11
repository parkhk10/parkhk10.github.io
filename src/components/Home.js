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
                <br />
                <br />
                <div id="home-projects">
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/sugars_thumbnail.png" className="column-img home-thumbnails"/>
                            <h5 className="project-title">
                                <a href="/sugars"><Link to="/sugars">How our bodies digest sugar?</Link></a>
                            </h5>
                            <span>information visualization</span>
                        </div>
                        <div className="tile">       
                            <img src="./images/airbnb_thumbnail.png" className="column-img home-thumbnails"/>
                            <h5 className="project-title">
                                <a href="/airbnb"><Link to="/airbnb">How can Airbnb increase customer loyalty?</Link></a>
                            </h5>
                            <span>service design</span>
                        </div>
                        <div className="tile">       
                            <img src="./images/majors_thumbnail.png" className="column-img home-thumbnails"/>
                            <h5 className="project-title">
                                <a href="/majors"><Link to="/majors">How should I select my college major?</Link></a>
                            </h5>
                            <span>information visualization</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;