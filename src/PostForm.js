import React, {useState} from "react";
import { createNewPost } from "./api";

const PostForm = (props) => {

const {posts, setPosts} = props;

const [postTitle, setPostTitle] = useState('');
const [postDescription, setPostDescription] = useState('');
const [postPrice, setPostPrice] = useState('');
const [postWillDeliver, setPostWillDeliver] = useState(false);

let newPost = {
    post: {
        title: postTitle,
        description: postDescription,
        price: postPrice,
        willDeliver: postWillDeliver
    }
}



    return (
        <>
        <h1>Create A New Post</h1>
        <form id='postForm'>
            <label htmlFor="newPostTitle">Title: </label>
            <input
                type="text"
                id="newPostTitle"
                name="newPostTitle"
                onChange={(event) => { setPostTitle(event.target.value) }}
                required
            />
            <br />
            <label htmlFor="newPostDescription">Description: </label>
            <input
                type="text"
                id="newPostDescription"
                name="newPostDescription"
                onChange={(event) => { setPostDescription(event.target.value) }}
            />
            <br />
            <label htmlFor="newPostPrice">Price: </label>
            <input
                type="text"
                id="newPostPrice"
                name="newPostPrice"
                onChange={(event) => { setPostPrice(event.target.value) }}
            />
            <br />
            <label htmlFor="newPostDelivery">Will Deliver: </label>
            <input
                type="checkbox"
                id="newPostDelivery"
                name="newPostDelivery"
                onChange={() => { setPostWillDeliver(!postWillDeliver) }}
            />
            <br />
            <button
                onClick={async (event) => {
                    event.preventDefault();
                    const postToAdd = await createNewPost(newPost);
                    setPosts([...posts, postToAdd]);                    
                    document.getElementById('newPostTitle').value = '';
                    document.getElementById('newPostDescription').value = '';
                    document.getElementById('newPostPrice').value = '';
                    document.getElementById('newPostDelivery').value = null;
                } 
                
                }>Submit</button>
        </form>

        </>


    )



}


export default PostForm;



