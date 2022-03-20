import React, { useState } from "react";
import { registerUser } from "./api";
import { Link } from 'react-router-dom';


const RegisterForm = (props) => {

    const [username, setUsername] = useState("");
    const [passwordOne, setPasswordOne] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const { token, setToken } = props


    let passwordMatch = (passwordOne === passwordTwo);

    let userObject = {
        user: {
            username: username,
            password: passwordTwo
        }
    }



    return (
        <form class="registerformcontainer">
            <h1>Create an Account</h1>
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
                    if (passwordMatch) {
                        setToken(registerUser(userObject))
                        localStorage.setItem("access_token", token);
                    }
                    document.getElementById('username').value = '';
                    document.getElementById('pwd').value = '';
                    document.getElementById('pwdConf').value = '';
                }

                }>Register</button>
            <br />
            <Link to="/">
                <a>Already have an account? Please log in</a>
            </Link>

        </form>
    )
}


export default RegisterForm;