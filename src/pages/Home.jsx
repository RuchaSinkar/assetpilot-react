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
import React, { useState, useEffect, useCallback } from "react";  // must import useState
import screenshot1 from "../images/screenshot1.png";
import screenshot2 from "../images/screenshot2.png";
import screenshot3 from "../images/screenshot3.png";
import screenshot4 from "../images/screenshot4.png";
import screenshot5 from "../images/screenshot5.png";
import screenshot6 from "../images/screenshot6.png";


// --- ADDED: Data for the carousel ---
const screenshots = [
    screenshot1,
    screenshot2,
    screenshot3,
    screenshot4,
    screenshot5,
    screenshot6,
];

const tutorialSteps = [
    "#1 Sign up and Set up your account",
    "#2 Record your Borrowed and Lent Assets",
    "#3 View your Dashboard to Stay Up to Date",
    "#4 Collect Badges On Hitting Milestones",
    "#5 Analyse your Data with Graphs",
    "#6 Stay Organized with Smart Calendar",
];


function Home(){
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [activeForm, setActiveForm] = useState(null); // "borrow" or "lend"

    // --- ADDED: Carousel state and logic ---
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = screenshots.length;

    const goToPrevious = useCallback(() => {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        setCurrentIndex(newIndex);
    }, [currentIndex, totalSlides]);

    const goToNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % totalSlides;
        setCurrentIndex(newIndex);
    }, [currentIndex, totalSlides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToPrevious, goToNext]);
    // --- End of added carousel logic ---

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

function openModal(form) {
    setActiveForm(form);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setActiveForm(null);
  }

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
                    <HeroActions
                    buttons={buttons}
                    onButtonClick={(id) => {
                    if (id === "borrowBtn") openModal("borrow");
                    else if (id === "lendBtn") openModal("lend");}} />
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

            {/*<!-- FEATURE SECTION - UPDATED WITH CAROUSEL LOGIC -->*/}
            <section className="features">
                <div className="container">
                    <h2 className="tutorial-heading">How to use AssetPilot</h2>

                    <div className="carousel-container">
                        <button className="nav-arrow" onClick={goToPrevious}>‹</button>

                    <div className="mockup-container">
                        <img
                        src="https://png.pngtree.com/png-clipart/20230222/ourmid/pngtree-macbook-pro-16-png-image_6614408.png"
                        alt="MacBook Mockup"
                        className="mockup-image"
                        />
                        <div className="mockup-screen">
                            <div className="screenshots-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                                {screenshots.map((src, index) => (
                                    <div className="screenshot" key={index}>
                                        <img src={src} alt={`screenshot ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button className="nav-arrow" onClick={goToNext}>›</button>
                    </div>

                    <div className="dots-indicator" id="dotsIndicator">
                        {screenshots.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></div>
                        ))}
                    </div>
                    <div className="tutorial-steps">
                        {tutorialSteps.map((step, index) => (
                            <h3
                                key={index}
                                style={{ display: currentIndex === index ? 'block' : 'none' }}
                            >
                                {step}
                            </h3>
                        ))}
                    </div>
                </div>
            </section>


            {/*<!-- FOOTER -->*/}
            <Footer/>

            {/* Modal Overlay */}
      {modalOpen && (
        <div
          id="modalOverlay"
          className="overlay"
          onClick={(e) => {
            if (e.target.id === "modalOverlay") closeModal();
          }}
          style={{ display: "flex" }}
        >
          {/* Conditionally render active form */}
          {activeForm === "borrow" && <Borrow onClose={closeModal} />}
          {activeForm === "lend" && <Lend onClose={closeModal} />}
          {/* Close button 
          <button
            className="closeModal"
            onClick={closeModal}
            aria-label="Close modal"
            style={{
              position: "absolute",
              top: 20,
              right: 20,
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "white",
              cursor: "pointer",
            }}
          >
            X
          </button>*/}
        </div>
      )}
      <Footer/>
        </>
    )
}
export default Home;

