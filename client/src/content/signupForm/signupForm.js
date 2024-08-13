import React, {useState, useEffect}  from 'react';
import './signupForm.css'
import eyeClosed from '../loginForm/eye-closed.svg'
import eyeOpen from '../loginForm/eye.svg'

function SignupForm(){
    const [inputs, setInputs] = useState({firstName: '', lastName: '', username: '', password: '', passwordVr: '', birthday: '', email: '', })
    const [clicked, setClicked] = useState(true)
// setInputs({firstName: inputs.firstName, lastName: inputs.lastName, username: inputs.username, password: inputs.password, email: inputs.email})
    return(
        <div id="signupForm">
            <div id="fNContainer">
                <div id='fNLabel'>FirstName:</div>
                <input id='firtstNameSU' type="text" value={inputs.firstName} onChange={(e) => {const val = e.target.value; setInputs({firstName: val, lastName: inputs.lastName, username: inputs.username, password: inputs.password, email: inputs.email})}}></input>
            </div>

            <div id="lNContainer">
                <div id='lNLabel'>LastName:</div>
                <input id='lastNameSU' type='text' value={inputs.lastName}  onChange={(e) => {const val = e.target.value; setInputs({firstName: inputs.firstName, lastName: val, username: inputs.username, password: inputs.password, email: inputs.email})}}></input>
            </div>

            <div id="UnContainer">
                <div id='UnLabel'>Username:</div>
                <input id='UsernameSU' type='text' value={inputs.username}  onChange={(e) => {const val = e.target.value; setInputs({firstName: inputs.firstName, lastName: inputs.lastName, username: val, password: inputs.password, email: inputs.email})}}></input>
            </div>

            <div id="SUEContainer">
                <div id='SUELabel'>Email:</div>
                <input id='emailSU' type='text' value={inputs.email}  onChange={(e) => {const val = e.target.value; setInputs({firstName: inputs.firstName, lastName: inputs.lastName, username: inputs.username, password: inputs.password, email: val})}}></input>
            </div>

            <div id="signupPWForm">
                <div id="signupPWLabel">Password:</div>
                <div id="signupPWContainer">
                    <input id="signupPWIn"type={clicked ? "password" : "text"} value={inputs.password} onChange={(e) => {const val = e.target.value; setInputs({firstName: inputs.firstName, lastName: inputs.lastName, username: inputs.username, password: val, email: inputs.email})}}></input>
                    <img className={clicked ? "eyeCon":"invisible"} src={eyeClosed} onClick={(e) => setClicked(false)}></img>
                    <img className={clicked ? "invisible":"eyeCon"} src={eyeOpen} onClick={(e) => setClicked(true)}></img>
                </div>
            </div>


            <div id="SUbtnContainer">
                <div id="signupBtn">Signup</div>
            </div>
        </div>

    )
}

export default SignupForm