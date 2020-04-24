import React from 'react';
import { Link, Redirect } from "react-router-dom";
import SearchForm from '../components/SearchForm/SearchForm'
import CardWrapper from '../components/CardWrapper/CardWrapper'
import CardBody from '../components/CardBody/CardBody'

const SearchPage = () => {
    return(
        <div>Search Page
        <SearchForm/>
        <CardWrapper/>
        <Link to="/saved" role="button" >Sign Up</Link>
        </div>
    )
}

export default SearchPage;

