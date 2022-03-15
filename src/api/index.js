// import { useState } from "react/cjs/react.production.min";

const baseUrl = "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt";

export const getPosts = async () => {
  const url = `${baseUrl}/posts`;
  const response = await fetch(url)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);

  return response;
};

export const registerUser = async (userObject) => {
  const url = `${baseUrl}/users/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  });
  const json = await response.json();
  if (json.success) {    
    localStorage.setItem("access_token", json.data.token);
    return json.data.token;
  } else {
    alert(`${json.error.message}`);
  }
};


export const loginAsUser = async (userObject) => {
  const url = `${baseUrl}/users/login`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject),
  });
  const json = await response.json();
  console.log(json);
  return response
}

// export const createNewPost = async (newPost) => {
//     const url = 'https://jsonplaceholder.typicode.com/posts/';
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer TOKEN_STRING_HERE'
//         },
//         body: JSON.stringify(newPost)
//     });

//     const json = await response.json();
//     console.log(json);
//     return json;
// };

// export const updateNewPost = async (newPost) => {
//     const url = 'https://jsonplaceholder.typicode.com/posts/';
//     const response = await fetch(url, {
//         method: "PATCH",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newPost)
//     });

//     const json = await response.json();
//     console.log(json);
//     return json;
// };

// export const deletePostById = async (postId) => {
//     const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
//     const response = await fetch(url, {
//         method: "DELETE"
//     });
//     const json = await response.json();
//     console.log(json);
//     return json;
// };
