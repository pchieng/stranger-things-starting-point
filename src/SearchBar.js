import React, {useState}  from "react";



const SearchBar = (props) => {

    const {posts, setPostsToDisplay } = props;
    const [searchTerm, setSearchTerm] = useState('');


    function postMatches(post, text) {
        if (post.description.includes(text) || post.title.includes(text)) {
            return true
        } else {
            return false
        }
    }


return (
    <form id="searchBar">
        <input
            type="text"
            
            onChange={(event) => {setSearchTerm(event.target.value)
            }}
        />
        <button
            onClick={(event) => {
                event.preventDefault();
                let filteredPosts = posts.filter(post => postMatches(post, searchTerm));
                setPostsToDisplay(searchTerm.length ? filteredPosts : posts);
                document.getElementById("searchBar").value='';
                setSearchTerm('');
            }}
            >Search</button>
    </form>



)


}



export default SearchBar;