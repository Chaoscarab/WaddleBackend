import React, {useState, useEffect}  from 'react';
import './header.css'
import Logo from './components/logo/logo.js'
import Signup from "./components/signupBtn/signupBtn.js"
import Login from "./components/loginBtn/loginBtn.js"



function Header({navState, changeDashstate}){

// example of navState: navState.dashState = 'Home'
let leftCol;
let midCol;
let rightCol;

if(navState.loggedIn === true){
    
leftCol = <Logo setDashboard={changeDashstate}/>
midCol = <div className="test"></div>
rightCol = <div className="test2">rightCol</div>

}else{

    leftCol = <Logo setDashboard={changeDashstate}/>
    midCol = <div className="test"></div>

    //LoggedIn False Button Container
    rightCol = <div className="LFBC">
        <Login setDashboard={changeDashstate}/>
        <Signup setDashboard={changeDashstate}/>
    </div>

}
    return(

        <div id="header">
            {leftCol}
            {midCol}
            {rightCol}
        </div>
    )
}

export default Header