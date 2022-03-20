import React, { useEffect, useState } from 'react';
import { deletePostById, getPosts, messageById } from './api';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const PostList = (props) => {
    const { posts, setPosts, message, setMessages, isLoggedIn } = props;
    const [messageTest, setMessagesTest] = useState('');
    const [postsToDisplay, setPostsToDisplay] = useState([]);
    let messageToUser = {
        message: {
            content: messageTest
        }
    }

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
        setPostsToDisplay(posts.data.posts)
    }, []);



    return (
        <div id="postPage">
            <h1 id="postListTitle">POSTS</h1>
            <SearchBar posts={posts} setPostsToDisplay={setPostsToDisplay} />
            {isLoggedIn ?
                <Link to="/createpost">
                    <button id="newPostButton">Create New Post</button>
                </Link>
                :
                null
            }
            <div id="postList">
                {postsToDisplay.map(post =>
                    <div
                        className='posts'
                        key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>{post.price}</p>
                        {post.isAuthor ?
                            <button class="deletepost"
                                onClick={() => {
                                    deletePostById(post._id)
                                    let filterPosts = posts.filter(allpost => allpost._id !== post._id)
                                    setPosts(filterPosts);
                                }}
                            >Delete</button> :
                            <form id='messageForm'>
                                <label htmlFor="messageUser">Message user about this product: </label>
                                <input type="text"
                                    id="messageUser"
                                    name="messageUser"
                                    onChange={(event) => { setMessagesTest(event.target.value) }}
                                />
                                <br />
                                <button
                                    onClick={async (event) => {
                                        event.preventDefault();
                                        const messageToAdd = await messageById(messageToUser, post._id);
                                        setMessages([...message, messageToAdd])
                                        document.getElementById('messageUser').value = '';
                                    }
                                    }>Submit Message to this User</button>

                            </form>


                        }
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostList;