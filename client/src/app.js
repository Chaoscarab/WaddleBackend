import React, {useState, useEffect}  from 'react';
import './global.css'
import Header from './header/header'
import Login from './content/loginForm/login.js'
import SignupForm from './content/signupForm/signupForm'

function App(){
  const [dashboard, setDashboard] = useState({dashState: 'Home', loggedin: false});

function loggoutFunc(){
  setDashboard({dashState: 'Home', loggedin: false})
}

function changeDash(arg){
  setDashboard({dashState: arg, loggedin: false})
}



let content;

console.log(dashboard.loggedin)
if(dashboard.loggedin === false){

switch (dashboard.dashState){
  case "Home": 
    content = <div>Home</div>
    break;
  
  case "Login":
    content = <Login />
    break;
  case "Signup":
    content = <SignupForm />
    break;
    
}
}else{
  
}

 return(
  <div>
    <Header navState={dashboard} changeDashstate={changeDash} loggout={loggoutFunc}/>
    {content}
  </div>
 )
}
    
    export default  App