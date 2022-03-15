import React, { useState } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import { registerUser } from "./api";


const RegisterForm = (props) => {
    
        const [username, setUsername] = useState("");
        const [passwordOne, setPasswordOne] = useState("");
        const [passwordTwo, setPasswordTwo] = useState("");
        const {token, setToken} = props
        
        
        let passwordMatch = (passwordOne === passwordTwo);
        
        let userObject = {
            user: {
                username: username,
                password: passwordTwo
            }
        }
        
        

    return (
        <form>
            <label htmlFor="username">Username: </label>
            <input
                type="text"
                id="username"
                name="username"
                minLength="5"
                onChange={(event) => { setUsername(event.target.value) }}
                required
            >
            </input>
            <br />

            <label htmlFor="pwd">Password: </label>
            <input 
                type="password" 
                id="pwd" 
                name="pwd" 
                minLength="5"
                onChange={(event) => { setPasswordOne(event.target.value) }} 
                required
                ></input>
                <br />

            <label htmlFor="pwdConf">Confirm Password: </label>
            <input 
                type="password" 
                id="pwdConf" 
                name="pwdConf" 
                minLength="5" 
                onChange={(event) => { setPasswordTwo(event.target.value) }} 
                required></input>
                <br />
            <button  
                onClick={(event) => {
                    event.preventDefault()
                    if (passwordMatch) {  setToken(registerUser(userObject))} 
                console.log(token)} 
                
                }>Register</button>
                
        </form>
    )
}
 

export default RegisterForm;