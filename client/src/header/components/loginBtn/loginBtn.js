import React from 'react';
import './loginBtn.css'

function LoginBtn({setDashboard}){

    return (
    <div id="loginBtn" onClick={(e) => setDashboard('Login')}>Login</div>
    )
}

export default LoginBtn