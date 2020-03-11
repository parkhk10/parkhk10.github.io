import React, { useEffect } from 'react';

const Play = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <div>
            <main className="pdp">
                <h1>Play</h1>
                <p>a collection of my side projects and dabbling
                </p>
                <br />
                <br />
                <div className="">
                    <h5>WEATHER CAT</h5>
                    <p>playing around on Illustrator</p>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div>
                            <img src="./images/play_weatherCat1.png" className="column-img"/>
                        </div>
                        <div>
                            <img src="./images/play_weatherCat2.png" className="column-img"/>
                        </div>
                        <div>
                            <img src="./images/play_weatherCat3.png" className="column-img"/> 
                        </div>
                    </div>
                    <div className="flex-only">
                        <div>
                            <img src="./images/play_weatherCat4.png" className="column-img"/>
                        </div>
                        <div>
                            <img src="./images/play_weatherCat5.png" className="column-img"/>
                        </div>
                        <div>
                            <img src="./images/play_weatherCat6.png" className="column-img"/>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="">
                    <h5>ELECTRONIC MEDICAL RECORD (EMR) INTERFACE DESIGN</h5>
                    <p>ui design challenge, playing around on Figma</p>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div>
                            <img src="./images/play_EMRNurse.png" className="wider-column-img"/>
                        </div>
                        <div>
                            <img src="./images/play_EMRDoctor.png" className="wider-column-img"/>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
                <div className="">
                    <h5>CHARACTERS, ABLUM COVERS, ETC</h5>
                    <p>purely for fun, playing around on Figma</p>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/play_cat.png" className="column-img"/>
                        </div>
                        <div className="tile">       
                            <img src="./images/play_family.png" className="column-img"/>
                        </div>
                    </div>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">                
                            <img src="./images/play_beingAnAdult.png" className="column-img"/> 
                        </div>
                        <div className="tile">
                            <img src="./images/play_dearMoon.png" className="column-img"/>
                        </div>
                    </div>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/play_food.png" className="column-img"/>
                        </div>
                        <div className="tile">
                            {/* <img src="./images/play_weatherCat6.png" className="column-img"/> */}
                        </div>
                    </div>
                </div>

                <div className="spacer"></div>
                <div className="">
                    <h5>POTTERY</h5>
                    <p>purely for fun, playing around on Figma</p>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/play_cat.png" className="column-img"/>
                        </div>
                        <div className="tile">       
                            <img src="./images/play_family.png" className="column-img"/>
                        </div>
                        <div className="tile">       
                            <img src="./images/play_family.png" className="column-img"/>
                        </div>
                    </div>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">                
                            <img src="./images/play_beingAnAdult.png" className="column-img"/> 
                        </div>
                        <div className="tile">
                            <img src="./images/play_dearMoon.png" className="column-img"/>
                        </div>
                    </div>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/play_food.png" className="column-img"/>
                        </div>
                        <div className="tile">
                            {/* <img src="./images/play_weatherCat6.png" className="column-img"/> */}
                        </div>
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

export default Play;