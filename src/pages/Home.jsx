import Navbar from "../components/Navbar";
import {useNavigate} from "react-router-dom";
import Footer from '../components/footer';


function Home(){
    const navigate=useNavigate();
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

                    <div className="grid-2">
                        <button className="hero-card card1" id="borrowBtn"><h3>Borrow</h3></button>
                        <button className="hero-card card2" id="lendBtn"><h3>Lend</h3></button>
                        <button className="hero-card card3" id="statsBtn"><h3>View Stats</h3></button>
                        <button className="hero-card card4" onClick={() => navigate("/")}><h3>History</h3></button>
                    </div>
                </div>
            </section>

            <section className="container about">
                <h1 className="title about-title">What is AssetPilot?</h1>
                <div className="info-about">
                    <p>AssetPilot is a smart tool to track everything you borrow or lend
                        cash, gold, silver, or utilities. Stay organized, get performance
                        ratings, and manage your asset exchanges with ease</p>
                </div>
                <div className="icons">
                    <figure>
                        <img className="icon" src="images/line-chart.png" 
                        data-static="images/line-chart.png" 
                        data-gif="images/line-chart.gif" alt="Line Chart" width="130" title="Asset Tracking" />
                        <figcaption>Asset Tracking</figcaption>
                        <p className="img-des">Track all assets,
                        not just money</p>
                    </figure>
                    
                    <figure>
                        <img src="images/calendar.png" className="icon" 
                        data-static="images/calendar.png"
                        data-gif="images/calendar.gif" alt="Calendar" width="130" title="Smart Calender" />
                        <figcaption>Smart Calendar</figcaption>
                        <p className="img-des">View due dates at
                        a glance</p>
                    </figure>
                    
                    <figure>
                        <img src="images/hourglass.png" className="icon" 
                        data-static="images/hourglass.png"
                        data-gif="images/hourglass.gif" alt="Hourglass" width="130" title="History Log" />
                        <figcaption>History Log</figcaption>
                        <p className="img-des">Access all past
                        transactions easily</p>
                    </figure>
                    
                    <figure>
                        <img src="images/evolution.png" className="icon" 
                        data-static="images/evolution.png"
                        data-gif="images/evolution.gif" alt="Evolution Chart" width="130" title="Performance Statistics"/>
                        <figcaption>Performance Statistics</figcaption>
                        <p className="img-des">See how you manage
                        your assets</p>
                    </figure>
                    
                </div>
                
            </section>
            <section className='mobile-app'>
                <h1 className="title mobile-app-title">We even got our smart phone page as well!</h1>
                <div className="mobile-app-box">
                    <img src="images/handphone.png" alt="Mobile App" width="300"/>
                </div>
            </section>
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


            <Footer />

            <div id="modalOverlay" className="overlay">
            <div className="borrow">
                <h1 className="borrow-heading">Record <span className="borrowed-title">Borrowed</span> Assets 
                    <span className="close-wrap"><button className="closeModal">X</button></span>
                </h1>
                
                <form>
                    <div className="form-grid">
                        <div className="field">
                            <label htmlFor="assetType">Asset Type</label>
                            <select className="assetType" name="assetType"  required >
                                <option value="Utility">Utility</option>
                                <option value="Cash">Cash</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Loan">Loan</option>
                            </select>
                        </div>
                        
                        <div className="field"> 
                            <label htmlFor="amount-borrow">Amount</label>
                            <input type="text" className="amount-borrow" name="amount" required />
                        </div>
                        <div className="field">
                            <label htmlFor="borrowedFrom">Borrowed From</label>
                            <input type="text" className="borrowedFrom" name="borrowedFrom" required />
                        </div>
                        <div className="field">
                            <label htmlFor="deadline">Deadline:</label>
                            <input type="date" className="deadline" name="deadline" required />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="interest">Interest Rate</label>
                            <input type="text" className="interest" name="interest" required />
                        </div>
                        <div className="field">
                            <label htmlFor="category">Category</label>
                            <select className="category" name="category"  required >
                                <option value="emergency">Emergency</option>
                                <option value="personal">Personal</option>
                                <option value="investment">Investment</option>
                                <option value="Loan">Loan</option>
                            </select>
                        </div>
                    </div>

                    <div className="field note">
                        <label htmlFor="addNote">Add a Note</label>
                        <input type="text" className="addNote" name="addNote" placeholder="comment..."/>
                    </div>
                    
                    <div className="submit">
                        <button className="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="lend">
                <h1 className="lend-heading">Record <span className="lend-title">Lent</span> Asset
                    <span className="close-wrap"><button className="closeModal">X</button></span>
                </h1>
                
                <form>
                    <div className="form-grid">
                        <div className="field">
                            <label htmlFor="assetType">Asset Type</label>
                            <select className="assetType" name="assetType"  required >
                                <option value="Utility">Utility</option>
                                <option value="Cash">Cash</option>
                                <option value="Gold">Gold</option>
                                <option value="Silver">Silver</option>
                                <option value="Loan">Loan</option>
                            </select>
                        </div>
                        
                        <div className="field"> 
                            <label htmlFor="amount-lend">Amount</label>
                            <input type="text" className="amount-lend" name="amount" required />
                        </div>
                        <div className="field">
                            <label htmlFor="LendTo">Lent to</label>
                            <input type="text" className="LentTo" name="LentTo" required />
                        </div>
                        <div className="field">
                            <label htmlFor="deadline">Deadline:</label>
                            <input type="date" className="deadline" name="deadline" required />
                        </div>
                        
                        <div className="field">
                            <label htmlFor="interest">Interest Rate</label>
                            <input type="text" className="interest" name="interest" required />
                        </div>
                        <div className="field">
                            <label htmlFor="category">Category</label>
                            <select id="category" name="category"  required >
                                <option value="emergency">Emergency</option>
                                <option value="personal">Personal</option>
                                <option value="investment">Investment</option>
                                <option value="loan">Loan</option>
                            </select>
                        </div>
                    </div>

                    <div className="field note">
                        <label htmlFor="addNote">Add a Note</label>
                        <input type="text" className="addNote" name="addNote" placeholder="comment..."/>
                    </div>
                    
                    <div className="submit">
                        <button className="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </>
    )
}
export default Home;