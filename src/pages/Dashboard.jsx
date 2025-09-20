import Navbar from "../components/Navbar";
import Footer from "../components/footer";

function Dashboard(){
    return(
        <>
        <Navbar></Navbar>
            <div className="container dash">
                <div className="dash-main">
                    <h1 className="title dash-title">Your Dashboard</h1>
                    <div className="glow-line"></div>
                    <div className="flashcard">
                        <div className="main-card">
                            <div className="card">
                            <img src="images/deal.png" alt="lent-img" className="dash-img" />
                            <span className="main-data">3000</span>
                            </div>
                            <h3>Total Lent</h3>
                        </div>

                        <div className="main-card">
                            <div className="card">
                            <img src="images/borrow.png" alt="borrow-img" className="dash-img" />
                            <span className="main-data">1500</span>
                            </div>
                            <h3>Total Borrowed</h3>
                        </div>

                        <div className="main-card">
                            <div className="card">
                            <img src="images/time-left.png" alt="pending-img" className="dash-img"/>
                            <span className="main-data">500</span>
                            </div>
                            <h3>Pending Returns</h3>
                        </div>
                    </div>

                            {/*!-- Transaction Section --*/}
                    <div className="dash-info">
                        <section className="transactions">
                        <div className="transaction borrowed">
                            <span className="dot red"></span>
                            <span className="amount">₹1700 - <b>silver</b></span>
                            <span className="detail">Borrowed from Yash</span>
                            <span className="due">Due 2025-10-24 <small>70 days left</small></span>
                        </div>

                        <div className="transaction lent">
                            <span className="dot green"></span>
                            <span className="amount">₹2500 - <b>utility</b></span>
                            <span className="detail">Lent to Rucha</span>
                            <span className="due">Due 2025-10-24 <small>70 days left</small></span>
                        </div>

                        <div className="transaction borrowed">
                            <span className="dot red"></span>
                            <span className="amount">₹500 - <b>cash</b></span>
                            <span className="detail">Borrowed from Aditya</span>
                            <span className="due">Due 2025-10-24 <small>70 days left</small></span>
                        </div>

                        <button className="view-more">View More</button>
                        </section>
                    </div>

                </div>
            </div>


            <div className="container-stats">
                <div className="stats-main">
                    <h1 className="stats-title">Your Statistics</h1>
                    <div className="stats-flashcard">
                        <div className="main-card main-stat-card1">
                            <div className="stat-card">
                            <h3>Total Assets Lent so far</h3>
                            <span className="main-data lent-data">Rs 15000</span>
                            </div>
                        </div>

                        <div className="main-card main-stat-card2">
                            <div className="stat-card">
                            <h3>Total Assets Borrowed so far</h3>
                            <span className="main-data borrow-data">Rs 35500</span>
                            </div>
                        </div>

                        <div className="main-card main-stat-card3">
                            <div className="stat-card">
                            <h3>Total Transactions so far</h3>
                            <span className="main-data trans-data">35</span>
                            </div>
                        </div>

                        <div className="charts">
                    <div className="charts-cards">
                        <div className="chart">
                            <h3 className="lent-head">Lent Asset Distributor</h3>
                            <canvas id="statsPieChart"></canvas>
                        </div>
                        <div className="chart">
                            <h3 className="amount-head">Outstanding v/s Settled Amounts</h3>
                            <canvas id="amtSemiDonutChart"></canvas>
                        </div>
                        <div className="chart">
                            <h3 className="borrow-head">Borrowed Asset Type Distribution</h3>
                            <canvas id="borrowDonutChart"></canvas>
                        </div>
                    </div>
                </div>
                        {/*<!--Chart pie chart lent asset type distribution-->*/}
                    </div>
                </div>

                

            </div>
            <Footer />
        </>
    )
}
export default Dashboard;