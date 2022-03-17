import React, { useEffect } from 'react';
import { deletePostById, getPosts } from './api';

const PostList = (props) => {
    const {posts, setPosts} = props;

    useEffect(async () => {
        const posts = await getPosts();
        setPosts(posts.data.posts);
    }, []);

console.log(posts)


    return (
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
                        >Delete</button> : <></>
}
                </div>
            )}
        </div>
    );
};

export default PostList;