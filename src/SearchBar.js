import React, {useState}  from "react";



const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

return (
    <form>
        <input
            type="text"
            onChange={(event) => setSearchTerm(event.target.value)}
        />



    </form>



)


}



export default SearchBar;