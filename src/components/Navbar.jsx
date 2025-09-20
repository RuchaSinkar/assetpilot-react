import Signin from "../pages/Signin";
function Navbar(){
    return(
        <>
            <header className="site-header">
                <div className="container">
                    <div className="logo">AssetPilot</div>
                    <button className="hamburger" id="hamburger">&#9776;</button>
                    <nav className="nav-links">
                        <a href="#">Home</a>
                        <a href="dashboard.html">Dashboard</a>
                        <a href="report.html">Report</a>
                        <a href="#">About</a>
                        <button 
                        className="signbtn" 
                        onClick={() => {
                            window.location.href = <Signin/>;
                        }}
                        >
                        <p>Sign in</p>
                        </button>

                    </nav>
                </div>
            </header>
        </>
    )
}
export default Navbar;