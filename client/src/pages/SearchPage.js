import React from 'react';
import { Link, Redirect } from "react-router-dom";
import SearchForm from '../components/SearchForm/SearchForm'
import CardWrapper from '../components/CardWrapper/CardWrapper'

const SearchPage = () => {
    return(
        <div>Search Page
        <SearchForm/>
        <CardWrapper/>
        <Link to="/saved" role="button" >Go to Saved Page</Link>
        </div>
    )
}

export default SearchPage;

