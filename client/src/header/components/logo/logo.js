import React from 'react';
import './logo.css'
import mascot from './mascotLogo.svg'

function Logo({setDashboard}){
    return(
        <div id="logoContainer">
        <img id="logoIcon" src={mascot} onClick={(e) => setDashboard('Home')}></img>
        <div id="logoText" onClick={(e) => setDashboard('Home')}>WADDLE</div>
       </div>
    )
}

export default Logo