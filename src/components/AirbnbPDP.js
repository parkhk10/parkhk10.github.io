import React from 'react';

const AirbnbPDP = () => {
    return(
        <div>
            <main className="pdp" id="airbnb-pdp">
                <h1>How can Airbnb increase customer loyalty?</h1>
                <p>A service design project to create a paid membership service for Airbnb to boost 
                    customer loyalty for high-end travelers.
                </p>
                <div className="pdp-wrapper">
                    <div className="pdp-child-left">
                        Timeline: <br />
                        Part 1: 10 weeks <br />
                        Part 2: 10 weeks
                        <br />
                        <br />
                        Team:<br />
                        Grace Learn<br />
                        Michael del Rosario<br />
                        Maria Arias (Part 2)
                        <br />
                        <br />
                        Skills:<br />
                        Design Research
                        Service Blueprints
                        User Journey
                        Personas
                        <p>Outcome:</p>
                        <a href="http://annadeng.com/396-assignment4/" target="_blank">Part 1 Design Brief</a>
                        <br />
                        <a href="http://annadeng.com/396-assignment4/" target="_blank">Part 2 Design Brief</a>
                    </div>
                    <div className="pdp-child-right">
                        <img src="./images/airbnb.png" className="section-img"/>
                    </div>
                </div>
                <br />
                <br />
                <div className="transition-paragraph">
                    <p>
                    30% of Airbnb’s customers are satisfied but not loyal to the service and use Airbnb 
                    interchangeably with competitors including Booking.com, Trivago, Homeaway, etc. 
                    Airbnb approached us with an idea of starting a paid membership program to increase 
                    conversion rates; our task was to design what this service may look like to help 
                    increase customer retention rates.
                    </p> 
                </div>
                <br />
                <h3>Part 1: Designing the Airbnb Paid Membership - a Portfolio of Benefits</h3>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Problem & Overview
                    </div>
                    <div className="pdp-child-content-right">
                        We were facing a 2-fold problem, one with the business and one with the customers (guests):
                        <img src="./images/airbnb_problem.png" className="drop-shadow section-img"/>
                        At the core of the business are the customers. In order to solve the business issue,
                        we knew that we needed to start from the customers as these two problems are not 
                        mutually exclusive but rather tightly related. 
                        <p>
                            From this intuition and Airbnb's research, we had a starting point-- a paid membership with
                            benefits that may address the guest's problem, which could lead to solving Airbnb's 
                            business problem as well. 
                        </p>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        My Role
                    </div>
                    <div className="pdp-child-content-right">
                        Though we all worked heavily across multiple functions, my primary contributions include 
                        <b> designing visuals</b> for presentations and <b>organizing</b> team meetings to get conversations rolling.
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Research
                    </div>
                    <div className="pdp-child-content-right">
                        <h5>THEME 1: USER JOURNEY LACKS OFFLINE TOUCHPOINTS</h5>
                        After conducting phone interviews with 3 avid Airbnb users and receiving over 30 responses on our initial user
                        survey, we were able to conceptualize and understand the user journey. 
                        <br />
                        <br />
                        We found that a <b>painpoint for users was the offline portions</b> of their journey, such as ground transportation 
                        and during the actual stay-- times when <b>Airbnb's touchpoints with the users are limited.</b>
                        <img src="./images/airbnb_userJourney.png" className="drop-shadow section-img"/>
                        <h5>THEME 2: MANY STAKEHOLDERS INFLUENCE GUESTS</h5>
                        Upon examining stakeholders involved in the user's journey, we discovered that guests
                        already have many connections with various businesses. From this, we decided to examine how we can integrate Airbnb
                        into the existing web of loyalty programs.
                        <img src="./images/airbnb_stakeholders.png" className="drop-shadow section-img"/>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Brainstorming
                    </div>
                    <div className="pdp-child-content-right">
                        Using the two themes as opportunities to innovate, we brainstormed all kinds of ideas
                        of what concrete benefits we might want to include in a paid membership package.
                        <div className="flex-only">
                            <div>
                                <img src="./images/airbnb_brainstorm1.jpg" className="drop-shadow list-img column-img"/>
                            </div>
                            <div>
                                <img src="./images/airbnb_brainstorm2.jpg" className="drop-shadow list-img column-img"/>
                            </div>
                        </div>
                        Grouping similar ideas, we synthesized 9 possible features of the membership package. 
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        User Testing
                    </div>
                    <div className="pdp-child-content-right">
                    We conducted user interviews with card sorting with 8 users of the target population.
                    We were curious to find users' reactions to the 9 features generated from our brainstorming.
                    The testing led to 3 key insights: 
                    <ol>
                        <li>Savings were still attractive to high-end leisure travelers.
                        </li>
                        <li>Most of the users already had connections with Lyft, Uber, or both services, which they
                            frequently used during their Airbnb trips.
                        </li>
                        <li>One tier was preferred to two tiers. 75% of our users opted for the lower tier, remarking
                            that if I'm not already loyal, there's no reason for them to choose the higher tier.
                        </li>
                    </ol>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        The Final Concept
                    </div>
                    <div className="pdp-child-content-right">
                        <h5>PROPOSED PORTFOLIO OF MEMBERSHIP PACKET FEATURES</h5>
                        Drawing on our insights, we a proposed a portfolio 5 main features that Airbnb may consider when
                        creating their paid membership. The premise of the membership lies in having a <b>points/rewards system </b>
                        that draws users in by <b>gamification.</b> Amongst these features, the most favored one was the ground transit 
                        assistance through which users can also score points with both Airbnb and the transit service. 
                        <p>The 5 features we proposed to Airbnb include:</p>
                            <img src="./images/airbnb_concept1.png" className="list-img drop-shadow"/>
                            <img src="./images/airbnb_concept2.png" className="list-img drop-shadow"/>
                            <img src="./images/airbnb_concept3.png" className="list-img drop-shadow"/>
                            <img src="./images/airbnb_concept4.png" className="list-img drop-shadow"/>
                            <img src="./images/airbnb_concept5.png" className="list-img drop-shadow"/>
                        <br />
                        <br />
                        <br />
                        <h5>SUPPORTING INTERFACES</h5>
                            As Airbnb is a web platform, changes to the service means changes to the app. 
                        <h5>CONCEPT VIDEO</h5>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        Reflections
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

export default AirbnbPDP;