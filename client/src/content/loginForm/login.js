import React, {useState, useEffect}  from 'react';
import './login.css'
import eyeClosed from './eye-closed.svg'
import eyeOpen from './eye.svg'


function Login(){

    const [inputs, setInputs] = useState({username: '', password: ''})
    const [clicked, setClicked] = useState(true)



    return(
        <div id="loginForm">

            <div id="userNameInContainer">

                <div id="USNLabel">Username:</div>
                <input id='userNameIn' type="text" value={inputs.username} onChange={(e) => {const val = e.target.value; setInputs({username: val, password: inputs.password})}}></input>
            </div>

            <div id="pwForm">
                <div id="pswLabel">Password:</div>
            
                <div id="pwInContainer">
                    <input id="LIPassword"type={clicked ? "password" : "text"} value={inputs.password} onChange={(e) => {const val = e.target.value; setInputs({username: inputs.username, password: val})}}></input>
                    <img className={clicked ? "eyeCon":"invisible"} src={eyeClosed} onClick={(e) => setClicked(false)}></img>
                    <img className={clicked ? "invisible":"eyeCon"} src={eyeOpen} onClick={(e) => setClicked(true)}></img>
                </div>

            </div>

            <div id="LgnBottomButtonBox">
            <div id="SmtLoginBtn">Login</div>
            <div id="FrgtPsswd">Forgot Password</div>
            </div>
        </div>
    )

}

export default Login