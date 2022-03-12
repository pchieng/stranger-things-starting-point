import React from "react";


const registerForm = () => {
    return (
        <form>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username"></input><br></br>
        <label htmlFor="pwd">Password: </label>
        <input type="passwword" id="pwd" name="pwd"></input><br></br>
        <label htmlFor="pwdConf">Confirm Password: </label>
        <input type="passwword" id="pwdConf" name="pwdConf"></input>
      </form>
    )
} 


export default registerForm;