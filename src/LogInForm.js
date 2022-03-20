import React from "react";
import { loginAsUser } from "./api";
import { Link } from 'react-router-dom';


const LogInForm = (props) => {


    const { setToken, userObject, setUsername, setPassword } = props;




    return (

        <form id="logInForm" className="formcontainer">
            <h1>Log In</h1>
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
            <button onClick={(event) => {
                event.preventDefault();
                setToken(loginAsUser(userObject));
                document.getElementById('logInUsername').value = '';
                document.getElementById('logInPwd').value = '';
            }}>
                Log In
            </button>
            <br />
            <Link to="/register">
                <a>Don&apos;t have an account? Register here</a>
            </Link>
        </ form>

    )
}

export default LogInForm