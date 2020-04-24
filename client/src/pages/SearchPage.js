import React from 'react';
import { Link, Redirect } from "react-router-dom";

const SearchPage = () => {
    return(
        <div>Search Page
        <Link to="/saved" role="button" >Sign Up</Link>
        </div>
    )
}

export default SearchPage;