import React, {useState} from "react";
import { loginAsUser } from "./api";


const LogInForm = (props) => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const {setToken} = props;


    let userObject = {
        user: {
            username: username,
            password: password
        }
    }

    return (
    
        <form id="logInForm">
            <label htmlFor="logInUsername">Username: </label>
            <input
                type="text"
                id="logInUsername"
                name="logInUsername"
                minLength="5"
                onChange={(event) => { setUsername(event.target.value) }}
                required
            >
            </input>
            <br />

            <label htmlFor="logInPwd">Password: </label>
            <input 
                type="password" 
                id="logInPwd" 
                name="logInPwd" 
                minLength="5"
                onChange={(event) => { setPassword(event.target.value) }} 
                required
                ></input>
                <br />
              <button onClick={(event) =>  {
                  event.preventDefault(); 
                  setToken(loginAsUser(userObject));
                  document.getElementById('logInUsername').value = '';
                  document.getElementById('logInPwd').value = '';
                }}
              >Log In
              </button>  
            </ form>
            
    )
} 

export default LogInForm