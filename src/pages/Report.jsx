
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import milestone1 from "../images/milestone1.png";
import milestone2 from "../images/milestone2.png";
import milestone3 from "../images/milestone3.png";
import milestone4 from "../images/milestone4.png";  
import milestone5 from "../images/milestone5.png";
import milestone6 from "../images/milestone6.png";
import milestone7 from "../images/milestone7.png";
import milestone8 from "../images/milestone8.png";
import milestone9 from "../images/milestone9.png";  

function Report(){
  return (
    <div className="report-body">
      <Navbar />

      <section className="performance">
        <h1 className="report-title">Your Performance Report</h1>
        <div className="Trust-score-container">
          <div className="trust-score-block block1">
            <p className="trust-score-data">Total On Time Repayment</p>
            <p className="trust-score-data data1">16</p>
            <p className="trust-score-data">Total Early Repayment</p>
            <p className="trust-score-data data2">4</p>
            <p className="trust-score-data">Total Red Repayment</p>
            <p className="trust-score-data data3">8</p>
          </div>

          <div className="trust-score-block block2">
            <p className="trust-score-heading">Your Trust Score is</p>
            <p className="trust-score-data score">71.4</p>
            <p className="trust-score-extra">Based on your repayment history</p>
          </div>
        </div>
      </section>
      

      <section className="milestones-section type4">
        <h1>Milestones Badges</h1>
        <div className="carousel-container type4">
          <div className="milestones-wrapper4">
            <div className="milestones-container4" id="milestonesContainer4">
              <div className="milestone-card4">
                <img src={milestone1} alt="Milestone 1" />
                <h3>Streak Master</h3>
                <p>10 on-time repayments in a row</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone2} alt="Milestone 2" />
                <h3>Debt Slayer</h3>
                <p>Cleared all debts in a single month</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone3} alt="Milestone 3" />
                <h3>Trust Badge</h3>
                <p>Kept 100% on-time repayment for 6 months</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone4} alt="Milestone 4" />
                <h3>Asset Whale</h3>
                <p>Managed total asset of ₹1,00,000</p>
              </div>
               <div className="milestone-card4">
                <img src={milestone5} alt="Milestone 5" />
                <h3>diversified Pro</h3>
                <p>Lent or Borrowed with all asset categories</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone6} alt="Milestone 6" />
                <h3>Zero Debt</h3>
                <p>No outstanding debts for 30+ days</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone8} alt="Milestone 7" />
                <h3>Deal Maker</h3>
                <p>Completed 50+ transaction</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone7} alt="Milestone 8" />
                <h3>Time Keeper</h3>
                <p>Never missed a due date for 3 months</p>
              </div>
              <div className="milestone-card4">
                <img src={milestone9} alt="Milestone 9" />
                <h3>Bounce Back</h3>
                <p>Cleared overdue debt before penalty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Report;
