import React from 'react';

const SugarsPDP = () => {
    return(
        <div>
            <main id="sugars-pdp">
                <h1>How do our bodies digest sugar?</h1>
                <p>A data visualization project that makes learning about 
                    sugar digestion more interactive, accessible, and fun.
                </p>
                <div className="pdp-wrapper">
                    <div className="pdp-child-left">
                        <p>Timeline:</p>
                        2 weeks
                        <p>Team:</p>
                        <ul>
                            <li>Anna Deng</li>
                            <li>Meera Ramakrishnan</li>
                        </ul>
                        <p>Tools:</p>
                        <ul>
                            <li>Figma</li>
                            <li>CSS Animations</li>
                            <li>React</li>
                        </ul>
                        <p>Outcome:</p>
                        <a href="http://annadeng.com/396-assignment4/" target="_blank">demo</a>
                    </div>
                    <div className="pdp-child-right">
                        <img src="./images/airbnb.png" className="section-img"/>
                    </div>
                </div>
                <br />
                <br />
                <div className="transition-paragraph">
                    <p>
                        For the information visualization course I took during fall 2019, 
                        we were tasked with the challenge to create an explorable explanation 
                        of a concept of interest. I collaborated with two other teammates to 
                        bring to life the processes that occur in our bodies when we consume 
                        sugar.
                    </p> 
                </div>
                <br />
                <h3>Understanding Sugar Digestion</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Motivation
                    </div>
                    <div className="pdp-child-content-right">
                        We wanted to use our explorable explanation as an opportunity to explain 
                        processes that people experience every day but may not be aware of its 
                        innerworkings. After reading about devasting effects of sugar, we found 
                        that sugar over-consumption is a real issue that we wanted to help tackle 
                        by raising awareness of how we digest sugars. 
                        <img src="./images/sugars_motivation.png" className="drop-shadow section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Whitespace Research
                    </div>
                    <div className="pdp-child-content-right">
                        What kind of projects, research, and products already existed in this realm 
                        and what whitespaces existed that we could contribute to? 
                        <p>We found 3 main types of works:</p>
                        <img src="./images/Sugars_BodyVis.png" className="list-img drop-shadow"/>
                        <img src="./images/Sugars_VisibleBody.png" className="list-img drop-shadow"/>
                        <img src="./images/Sugars_Diagrams.png" className="list-img drop-shadow"/>
                    </div>
                </div>
                <h3>Ideating & Conceptualization</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Brainstorming
                    </div>
                    <div className="pdp-child-content-right">
                    Online information about the digestive system is riddled with medical jargons, 
                    making it hard for those without medical knowledge to understand. To combat this, 
                    we brainstormed ways we can present information by leveraging Gestalt principles and 
                    ___ principles to minimize cognitive load. 
                    <p>Taking our ideas to paper + pencil, we landed on creating three defined sections: </p>
                    <ol>
                        <li>Important body organs in sugar digestion</li>
                        <li>Description of sugars</li>
                        <li>How different sugars affect the body</li>
                    </ol>
                        <img src="./images/Sugars_Brainstorming.png" className="drop-shadow section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Prototyping
                    </div>
                    <div className="pdp-child-content-right">
                    In order to prototype our idea, we first drew out a simple storyboard. Once we had our 
                    ideas organized, we then took to PowerPoint to create a mid-fidelity mock-up. 
                        <img src="./images/Sugars_Prototype.png" className="section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        User Testing
                    </div>
                    <div className="pdp-child-content-right">
                    Although our prototype was still a ways off from the final product, we conducted testing with
                    5 users. We drew 3 main insights from our testing:
                    <ol>
                        <li>Transitions are lacking - users remarked that the abrupt change in topics without any
                            visual or verbal cues was confusing.
                        </li>
                        <li>Lack of user control - users wanted a way to easily access where there are in the digestive
                            process without having to scroll all the way up and backtracking.
                        </li>
                        <li>Inconsistencies with formatting - users found the diagram switching from left to right confusing.
                            Our design lacked continuation from one step to the next that gives the explorable a cohesive feel.
                        </li>
                    </ol>
                    </div>
                </div>
                <h3>Solution & Final Design</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Creating Diagrams that Make Sense
                    </div>
                    <div className="pdp-child-content-right">
                    To convey the medical information in a way that is easily understandable, we needed to create 
                    images that reacted to users’ input in some way. We found that SVGs work well with code and 
                    mocked up a few diagrams. While it was challenging to create diagrams that were so intricate, 
                    we strived to design visuals that balanced intricacy with simplicity since our intention was 
                    not to create scientific, textbook diagrams but rather ones that elicit visceral response and 
                    understanding.
                    <p>Getting the diagrams right took many iterations as shown in our Figma design playground:</p>
                        <img src="./images/Sugars_VisualDesign.png" className="section-img drop-shadow"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Bringing Ideas to Life
                    </div>
                    <div className="pdp-child-content-right">
                    In order to bring all of our designs into reality, we created a React App. Using SVGs and paths, we created CSS animations that responded to 
                    users’ interactions such as scroll, click, and hover. 
                    <br />
                    <div className="pdp-wrapper">
                        <img src="./images/Sugars_Demo.gif" className="gif section-img"/>
                        <a className="button glow-button sugars-btn-size" href="http://annadeng.com/396-assignment4/" target="_blank">
                            full demo
                        </a>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SugarsPDP;