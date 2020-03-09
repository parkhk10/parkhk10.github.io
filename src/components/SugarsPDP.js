import React from 'react';

const SugarsPDP = () => {
    return(
        <div>
            <main id="sugars-pdp">
                <h1>How do we digest sugar?</h1>
                <p>A data visualization project that makes learning about 
                    sugar digestion more interactive, accessible, and fun.
                </p>
                <div className="pdp-intro-wrapper">
                    <div className="pdp-child-left">
                        <p>Timeline:</p>
                        <span>2 weeks</span>
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
                    </div>
                    <div className="pdp-child-right">
                        <img src="./images/airbnb.png"/>
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
                <h3>Section Title</h3>
                <div className="pdp-intro-wrapper">
                    <div className="pdp-child-content-left">
                        Left Section Title
                    </div>
                    <div className="pdp-child-content-right">
                        Right content
                    </div>
                </div>
            </main>
        </div>
    )
}

export default SugarsPDP;