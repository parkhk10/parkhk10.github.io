import React, { useEffect } from 'react';

const MajorsPDP = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <main className="pdp">
                <h1>How should I select my college major?</h1>
                <p>A data visualization project that helps students examine college 
                    majors based on a few quantitative factors.
                </p>
                <div className="pdp-wrapper">
                    <div className="pdp-child-left">
                    Timeline: <br />
                        1 week
                        <br />
                        <br />
                        Partner:<br />
                        Anna Deng
                        <br />
                        <br />
                        Tools:<br />
                        D3
                        JavaScript
                        HTML/CSS
                        <br />
                        <br />
                        Outcome: <br />
                        <a href="https://parkhk10.github.io/interactive-viz/" target="_blank">College Major Explorer</a>
                    </div>
                    <div className="pdp-child-right">
                        <img src="./images/majors.png" className="section-img"/>
                    </div>
                </div>
                <br />
                <br />
                <div className="transition-paragraph">
                    <p>
                        Choosing your college major can be hard. This explorer helps you investigate different majors' 
                        characteristics and job prospects to facilitate the major decision process. 
                        This was created for interactive information visualization course in fall 2019. 
                    </p> 
                </div>
                <br />
                <h3>Conceptualizing an Interactive Visualization</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Storyboard 1: One-on-One Comparison of Two Majors
                    </div>
                    <div className="pdp-child-content-right">
                        After brainstorming which attributes we should deem most important, we decided to plot the 
                        data in a way that would be useful for a student who wanted to compare these attributes from 
                        major to major. These details of college majors are most often discussed when younger students 
                        are investigating which majors to study during their four years in college. Our first storyboard 
                        included a bar chart comparison between just two selected majors.
                        <img src="./images/majors_storyboard1.png" className="section-img"/>
                        <img src="./images/majors_storyboard2.png" className="section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Storyboard 2: Context-Based Scatterplot
                    </div>
                    <div className="pdp-child-content-right">
                        After our first draft, we realized that students needed more context for each of the majors they were 
                        investigating. It seemed less informative to compare only two majors with each other compared to 
                        knowing how their attributes fit in with the rest of the 100+ majors. Thus, we decided to create a 
                        scatterplot to show all of the data points at once, and a “control panel” to filter down the data points 
                        based on the user input preferences. 
                        <img src="./images/majors_storyboard3.png" className="section-img"/>
                        <img src="./images/majors_storyboard4.png" className="section-img"/>
                    </div>
                </div>
                <h3>Implementing the Final Design</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Hover Tooltip
                    </div>
                    <div className="pdp-child-content-right">
                        When the user hovers on each circle on the scatterplot, a tooltip appears, which contains the most 
                        pertinent attributes including the major name, median salary, share women, and major size. 
                        <img src="./images/majors_tooltip.png" className="section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Filtering by Parameters
                    </div>
                    <div className="pdp-child-content-right">
                        In order to make filtering easy and intuitive, we created inputs for each of the four attributes 
                        that we allow users to filter by. All of the points that fit the criteria become colored according 
                        to their major category from the neutral gray. All the filters work in “and” relation, allowing 
                        users to whittle down the selection of highlighted data points on the scatterplot.
                        <div className="flex-space-around">
                            <img src="./images/majors_filters.png" className="column-img section-img"/>
                        </div>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Linked supplementary bar graphs
                    </div>
                    <div className="pdp-child-content-right">
                        When the user changes any of the filters, three bar graphs of the selected points are generated. 
                        Each bar graph displays the selected majors against the three most pertinent variables—median 
                        salary, major size, and share women. This helps users to compare major-to-major for each attribute 
                        by <b>position </b>instead of having to hover over each point on the scatterplot. 
                        <div className="flex-space-around">
                            <img src="./images/majors_bargraphs.png" className="column-img section-img"/>
                        </div>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Using Principles to Guide Design
                    </div>
                    <div className="pdp-child-content-right">
                        Since we wanted to focus on facilitating comparison of various quantitative attributes across 
                        different majors, we heavily relied on the position encoding, which is known to be the most 
                        effective for quantitative variables. Major categories, nominal variables, are encoded with hue. 
                        By using hue to distinguish these groups, viewers are easily and immediately able to tell which 
                        data point belongs to each major category since color is a pre-attentive visual encoding. 
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Final Implementation
                    </div>
                    <div className="pdp-child-content-right">
                        We created a website containing our interactive visualization using D3, JavaScript, and HTML/CSS. 
                        One of the goals of this project was for us to learn D3 as well, so it was a good introduction to
                        the framework. This project taught me the importance of intentional design and leveraging design 
                        principles and keeping in mind how people perceive things to reduce cognitive overload. 
                        In the future, I'd like to enhance some features such as ordering the bar graph and allowing for 
                        brushing to zoom into certain areas on the scatterplot.
                        <br />
                        <div className="pdp-wrapper">
                            <video controls autoPlay>
                                <source src="./images/majors_demo.mp4" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                            <a className="button glow-button sugars-btn-size" href="https://parkhk10.github.io/interactive-viz/" target="_blank">
                                demo
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MajorsPDP;