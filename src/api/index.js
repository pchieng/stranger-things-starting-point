export const getPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts';
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const createNewPost = async (newPost) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TOKEN_STRING_HERE'
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    console.log(json);
    return json;
};

export const updateNewPost = async (newPost) => {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });

    const json = await response.json();
    console.log(json);
    return json;
};





export const deletePostById = async (postId) => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    const response = await fetch(url, {
        method: "DELETE"
    });
    const json = await response.json();
    console.log(json);
    return json;
};