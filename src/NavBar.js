import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

const {isLoggedIn, loggedInUsername} = props;

    return (
        <div id="navbar">
            <div id="siteName">
                Stranger&apos;s Things
            </div>
            <div id="siteLinks">
            {isLoggedIn ?
                <span>{`Welcome, ${loggedInUsername}`}</span>
                :
                <span>Welcome, Guest</span>
            }

            <Link to="/">
                <a>HOME</a>
            </Link>

            <Link to="/posts">
                <a>POSTS</a>
            </Link>

            {isLoggedIn ?
                <Link to="/messages">
                    <a>MESSAGES</a>
                </Link>
                :
                null
            }

            {isLoggedIn ?
                <Link to="/">
                    <a
                        onClick={() => {
                            localStorage.removeItem("access_token");
                        }}>LOG OUT</a>
                </Link>
                :
                null}
        </div>
        </div>
    )
}

export default NavBar;