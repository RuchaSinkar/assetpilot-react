import React from 'react';
function footer(){
    return(
        <footer className="site-footer">
                <div className="container footer-grid">
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a onClick={() => navigate("/dashboard")} className="footer-links">Dashboard</a></li>
                            <li><a onClick={() => navigate("/")} className="footer-links">About Us</a></li>
                            <li><a onClick={() => navigate("/")} className="footer-links">Account</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Socials</h4>
                        <ul>
                            <li><a href="#" className="footer-links">Twitter</a></li>
                            <li><a href="#" className="footer-links">Instagram</a></li>
                            <li><a href="#" className="footer-links">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#" className="footer-links">Email</a></li>
                            <li><a href="#" className="footer-links">Phone no.</a></li>
                            <li><a href="#" className="footer-links">Inquiries</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Asset Pilot. All rights reserved.</p>
                </div>
            </footer>
    )
}
export default footer;