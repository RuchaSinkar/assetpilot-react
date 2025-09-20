import React from 'react';
import handphone from '../images/handphone.png';
function MobileApp(){
    return(
        <section className='mobile-app'>
                <h1 className="title mobile-app-title">We even got our smart phone page as well!</h1>
                <div className="mobile-app-box">
                    <img src={handphone} alt="Mobile App" width="300"/>
                </div>
        </section>
    )
}
export default MobileApp;