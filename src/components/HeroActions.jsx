import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroActions({buttons}){
    const navigate=useNavigate();

    return(
        <>
            <div className="grid-2">
                {buttons.map((btn,index)=>(
                    <button 
                    key ={index} 
                    className={`hero-card ${btn.className}`}
                    onClick={()=>btn.path ? navigate(btn.path):null} 
                    id={btn.id}>
                        <h3>{btn.title}</h3>
                    </button>
                ))}
                </div>
        </>
    )
}
export default HeroActions;