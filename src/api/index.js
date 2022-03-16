const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt'

export const getPosts = async () => {
  const url = `${baseUrl}/posts`;
  const response = await fetch(url)
    .then(response => response.json())
    .then(result => {
      return result;
    })
    .catch(console.error);

  return response
};


export const registerUser = async (userObject) => {
  const url = `${baseUrl}/users/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  });
  const json = await response.json();
  if (json.success) {    
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
  if (json.success) {
    console.log(json.data.token)
    return json.data.token;
  } else {
    alert(`${json.error.message}`)
  }
}



export const getUserData = async (userObject) => {
  const url = `${baseUrl}/users/me`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}` 
    },
    body: JSON.stringify(userObject),
  });
  const json = await response.json();
  if (json.success) {
    console.log("Logged In!")
    console.log(json)
    return json;
  } else {
    alert(`${json.error.message}`)
  }
}




export const createNewPost = async (newPost) => {
    const url = `${baseUrl}/posts`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer `
        },
        body: JSON.stringify(newPost)
    })
    // .then(response => response.json())
    // .then(result => {
    //   console.log(result);
    // })
    // .catch(console.error);

    const json = await response.json();
    console.log(json);
    return json;
};

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