import React from 'react';

function Lend(){
    return(
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
    )
}
export default Lend;