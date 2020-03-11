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
                    <p>envisioning a cat-themed weather app, made on Illustrator</p>
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
                    <p>lumps of clay thrown on the wheel</p>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">
                            <img src="./images/play_pottery1.JPG" className="column-img"/>
                        </div>
                        <div className="tile">       
                            <img src="./images/play_pottery2.JPG" className="column-img"/>
                        </div>
                    </div>
                    <div className="flex-only grid-vertical-spacing-bar">
                        <div className="tile">       
                            <img src="./images/play_pottery3.JPG" className="column-img"/>
                        </div>
                        <div className="tile">
                            <img src="./images/play_pottery4.JPG" className="column-img"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Play;