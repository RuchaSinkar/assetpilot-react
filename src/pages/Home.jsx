import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";
import HeroActions from "../components/HeroActions";
import FigureGif from "../components/FigureGif";
import lineChart from "../images/line-chart.png";
import lineChartGif from "../images/line-chart.gif";
import calendar from "../images/calendar.png";
import calendarGif from "../images/calendar.gif";
import hourglass from "../images/hourglass.png";
import hourglassGif from "../images/hourglass.gif";
import evolution from "../images/evolution.png";
import evolutionGif from "../images/evolution.gif";
import MobileApp from "../components/MobileApp";
import Footer from "../components/footer";
import Borrow from "../components/Borrow";
import Lend from "../components/Lend";


function Home(){
    const navigate=useNavigate();
    const buttons = [
    { title: "Borrow", className: "card1", id: "borrowBtn" },
    { title: "Lend", className: "card2", id: "lendBtn" },
    { title: "View Stats", className: "card3", id: "statsBtn" },
    { title: "History", className: "card4", id: "historyBtn", path: "/" }
  ];
    const figure=[
  { img: lineChart, gif: lineChartGif, alt: "Line Chart", title: "Asset Tracking", name: "Asset Tracking", para: "Track all assets, not just money" },
  { img: calendar, gif: calendarGif, alt: "Calendar", title: "Smart Calendar", name: "Smart Calendar", para: "View due dates at a glance" },
  { img: hourglass, gif: hourglassGif, alt: "Hourglass", title: "History Log", name: "History Log", para: "Access all past transactions easily" },
  { img: evolution, gif: evolutionGif, alt: "Evolution", title: "Performance Statistics", name: "Performance Statistics", para: "See how you manage your assets" }
];

    return(
        <>
            <Navbar/>
            <section className="hero">
                <div className="container hero-flex">
                    <div className="hero-left">
                        <h1 className="title hero-title">Money Moves<br/>Made Easy</h1>
                        <p className="hero-sub-title">
                        Make it easy to track all the Assets you owe them or all the Assets they owe you with your finance buddy, AssetPilot!
                        </p>
                        <button onClick={() => navigate("/dashboard")} className="cta-button">Visit Your Dashboard</button>
                    </div>
                    <HeroActions buttons={buttons} />
                </div>
            </section>

            <section className="container about">
                <h1 className="title about-title">What is AssetPilot?</h1>
                <div className="info-about">
                    <p>AssetPilot is a smart tool to track everything you borrow or lend
                        cash, gold, silver, or utilities. Stay organized, get performance
                        ratings, and manage your asset exchanges with ease</p>
                </div>

                {/*Annimate images */}
                <div className="icons">
                    <FigureGif figure={figure} />
                </div>
                
            </section>
            
            {/*Mobile App */}
            <MobileApp/>

            {/*<!-- FEATURE SECTION -->*/}
            <section className="features">
                <div className="container">
                    <h2 className="tutorial-heading">How to use AssetPilot</h2>

                    <div className="carousel-container">
                        <button className="nav-arrow" id="prevBtn">‹</button>

                    <div className="mockup-container">
                        <img
                        src="https://png.pngtree.com/png-clipart/20230222/ourmid/pngtree-macbook-pro-16-png-image_6614408.png"
                        alt="MacBook Mockup"
                        className="mockup-image"
                        />
                        <div className="mockup-screen">
                            <div className="screenshots-container" id="screenshotsContainer">
                                <div className="screenshot">
                                <img src="images/screenshot1.png" alt="screenshot 1" />
                                </div>
                                <div className="screenshot">
                                <img src="images/screenshot2.png" alt="screenshot 2" />
                                </div>
                                <div className="screenshot">
                                <img src="images/screenshot3.png" alt="screenshot 3" />
                                </div>
                                <div className="screenshot">
                                <img src="images/screenshot4.png" alt="screenshot 4" />
                                </div>
                                <div className="screenshot">
                                <img src="images/screenshot5.png" alt="screenshot 5" />
                                </div>
                                <div className="screenshot">
                                <img src="images/screenshot6.png" alt="screenshot 6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="nav-arrow" id="nextBtn">›</button>
                    </div>

                    <div className="dots-indicator" id="dotsIndicator">
                        <div className="dot active" data-index="0"></div>
                        <div className="dot" data-index="1"></div>
                        <div className="dot" data-index="2"></div>
                        <div className="dot" data-index="3"></div>
                        <div className="dot" data-index="4"></div>
                        <div className="dot" data-index="5"></div>
                    </div>
                    <div className="tutorial-steps">
                        <h3 className="step1">#1 Sign up and Set up your account</h3>
                        <h3 className="step2">#2 Record your Borrowed and Lent Assets</h3>
                        <h3 className="step3">#3 View your Dashboard to Stay Up to Date</h3>
                        <h3 className="step4">#4 Collect Badges On Hitting Milestones</h3>
                        <h3 className="step5">#5 Analyse your Data with Graphs</h3>   
                        <h3 className="step6">#6 Stay Organized with Smart Calendar</h3>    
                    </div>
                </div>
            </section>


            {/*<!-- FOOTER -->*/}
            <Footer/>

            <div id="modalOverlay" className="overlay">
            
            {/*Borrow */}
            <Borrow/>
        {/*Lend */}
            <Lend/>
            </div>
        </>
    )
}
export default Home;