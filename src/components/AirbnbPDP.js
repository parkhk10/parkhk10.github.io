import React, { useEffect } from 'react'; 

const AirbnbPDP = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <main className="pdp" id="airbnb-pdp">
                <h1>How can Airbnb increase customer loyalty?</h1>
                <p>A service design project to create a paid membership service for Airbnb to boost 
                    customer loyalty for high-end travelers.
                </p>
                <div className="pdp-wrapper">
                    <div className="pdp-child-left">
                        <br />
                        <p className="serif-font summary-label">TIMELINE:</p>
                        8 weeks
                        <br />
                        <p className="serif-font summary-label">TEAM:</p>
                        Grace Learn<br />
                        Michael del Rosario
                        <br />
                        <p className="serif-font summary-label">SKILLS:</p>
                        Design Research
                        Service Blueprints
                        User Journey
                        <br />
                        <p className="serif-font summary-label">OUTCOME:</p>
                        Proposal to Airbnb
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
                        <div className="serif-font">PROBLEM & OVERVIEW</div>
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
                        <div className="serif-font">MY ROLE</div>
                    </div>
                    <div className="pdp-child-content-right">
                        Though we all worked heavily across multiple functions, my primary contributions include 
                        <b> designing visuals</b> for presentations including the character drawings and the <b>video </b>
                        and <b>organizing</b> team meetings to get conversations rolling.
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        <div className="serif-font">RESEARCH</div>
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
                        <div className="serif-font">BRAINSTORMING</div>
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
                        <div className="serif-font">USER TESTING</div>
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
                        <div className="serif-font">FINAL CONCEPT</div>
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
                        <h5>MOCK-UPS OF SUPPORTING INTERFACES</h5>
                            As Airbnb is a web platform, changes to the service means changes to the app. 
                            As such, we mocked up what changes to the app might look like to support the membership service.
                        <p>Profile Change:</p>
                        <div className="pdp-wrapper">
                            <div className="pdp-child-content-right">
                                <video controls autoPlay loop>
                                    <source src="./images/airbnb_profilePrototype.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="pdp-child-content-left">
                                <br />
                                <br />
                                <br />
                                <p>Users can into the profile to see what their rewards are.</p>
                            </div>
                        </div>
                        <p>Personal Rideshare Promo Code:</p>
                        <div className="pdp-wrapper">
                            <div className="pdp-child-content-right">
                                <video controls autoPlay loop>
                                    <source src="./images/airbnb_lyftPrototype.mp4" type="video/mp4"/>
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="pdp-child-content-left">
                                <br />
                                <br />
                                <br />
                                <p>Upon booking, users will receive a personal rideshare promo code in their inbox for their trip.</p>
                            </div>
                        </div>   
                        <br />
                        <br />
                        <br />
                        <h5>CONCEPT VIDEO</h5>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fgIZGA6DIRw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="pdp-wrapper">
                    <div className="pdp-child-content-left">
                        <div className="serif-font">REFLECTIONS</div>
                    </div>
                    <div className="pdp-child-content-right">
                    This project taught me to grapple with problems that are large and vague. 
                    As someone who champions clarity and concreteness, the beginning of the project
                    was especially a challenge for me. I learned to combat the ambiguous nature of the 
                    project is something by conducting more research and getting into the user's 
                    mindset.
                    <br />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AirbnbPDP;