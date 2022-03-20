import React, { useState, useEffect } from "react";
import { getUserData } from "./api";

const MessagesList = () => {

    const [userData, setUserData] = useState([]);
    useEffect(async () => setUserData(await getUserData()), []);

    return (
        <div>
            {userData.map(message =>
                <div  className="messages" key={message._id}>
                    <p>{`Message From: ${message.fromUser.username}`}</p>
                    <p>{`Message: ${message.content}`}</p>
                    
                </div>
            )}
        </div>
    )
}


export default MessagesList;
