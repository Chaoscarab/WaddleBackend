import React from 'react';
import "./signupBtn.css"

function SignupBtn({setDashboard}){
    
    return (<div id="SignupBtn" onClick={(e) => setDashboard('Signup')}> Signup </div>)
}

export default SignupBtn