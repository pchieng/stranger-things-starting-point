const baseUrl = 'https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt'

export const getPosts = async () => {
  const url = `${baseUrl}/posts`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    },
  })
    .then(response => response.json())
    .then(result => {
      // console.log(result)
      return result;
    })
    .catch(console.error);

  return response
};

export const testAuthentication = async (token) => {
  const url = `${baseUrl}/test/me`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  });
  const json = await response.json();
  if (json.success) {
    return json;
  } else {
    alert(`${json.error.message}`)
  }
}



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
    localStorage.setItem('access_token', json.data.token);
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
    // console.log(json)
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
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    },
    body: JSON.stringify(newPost)
  })
  const json = await response.json();
  console.log(newPost)
  if (json.success) {
    // console.log(json)
    return json.data.post;
  } else {
    alert(`${json.error.message}`)
  }
}

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





export const deletePostById = async (postId) => {
  const url = `${baseUrl}/posts/${postId}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    }
  });
  const json = await response.json();
  if (json.success) {
    // console.log(json)
    return json;
  } else {
    console.log(json)
    alert(`${json.error.message}`)
  }
};

export const messageById = async (messageToUser, postId) => {
  const url = `${baseUrl}/posts/${postId}/messages`;
  const response = await fetch (url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("access_token")}`
    },
    body: JSON.stringify(messageToUser)
    
  });
  const json = await response.json();
  console.log(messageToUser)
  if(json.success) {
    console.log(json , "This one!")
    return json;
  } else {
    console.log(json , "This one!")
    alert(`${json.error.message}`)
  }  
};