import React, {useState} from "react";
import { loginAsUser } from "./api";


const LogIn = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    


    let userObject = {
        user: {
            username: username,
            password: password
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
                onChange={(event) => { setPassword(event.target.value) }} 
                required
                ></input>
                <br />
              <button onClick={(event) =>  {
                  event.preventDefault(); 
                  loginAsUser(userObject)}}
              >Log In
              </button>  
            </ form>
            
    )
} 

export default LogIn