import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = (props) => {

const {isLoggedIn, loggedInUsername} = props;

    return (
        <div id="navbar">
            <div id="siteName" class="navtext">
                Stranger&apos;s Things
            </div>
            <div id="siteLinks">
            {isLoggedIn ?
                <span class="navtext">{`Welcome, ${loggedInUsername}`}</span>
                :
                <span class="navtext">Welcome, Guest</span>
            }

            <Link to="/">
                <a class="navtext">HOME</a>
            </Link>

            <Link to="/posts">
                <a class="navtext">POSTS</a>
            </Link>

            {isLoggedIn ?
                <Link to="/messages">
                    <a class="navtext">MESSAGES</a>
                </Link>
                :
                null
            }

            {isLoggedIn ?
                <Link to="/">
                    <a class="navtext"
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