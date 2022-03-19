import React, { useEffect, useState } from 'react';
import { deletePostById, getPosts, messageById } from './api';
import { Link } from 'react-router-dom';

const PostList = (props) => {
    const {posts, setPosts, message, setMessages} = props;
    const [messageTest, setMessagesTest] = useState('')
    let messageToUser = {
        message: {
            content: messageTest
        }
    }

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);



    return (
        <>
        <h1>POSTS</h1>
        <Link to="/createpost">
            <button>Create New Post</button>
        </Link>
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>{post.price}</p>
                    {post.isAuthor ? 
                    <button
                        onClick={() => {
                            deletePostById(post._id)
                            let filterPosts = posts.filter(allpost => allpost._id !== post._id)
                            setPosts(filterPosts);
                        }}
                        >Delete</button> : 
                        <form id= 'messageForm'>
                            <label htmlFor="messageUser">Message poster about this product: </label>
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
                                    document.getElementById('messageUser').value= '';
                                }
                                }>Submit Message to this User</button>

                        </form>
                        
                        
}
                </div>
            )}
        </div>
        </>
    );
};

export default PostList;