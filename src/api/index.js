export const getPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 