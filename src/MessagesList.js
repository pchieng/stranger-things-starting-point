import React, { useState, useEffect } from "react";
import { getUserData } from "./api";

const MessagesList = () => {

    const [userData, setUserData] = useState([]);
    useEffect(async () => setUserData(await getUserData()), []);

    console.log("messagesList", userData)
    return (
        <div>
            {userData.map(message =>
                <div key={message._id}>
                    <p>{`Message From: ${message.fromUser.username}`}</p>
                    <p>{`Message: ${message.content}`}</p>
                    <p>=============================</p>
                </div>
            )}
        </div>
    )
}


export default MessagesList;
