import React from 'react';
// import Jumbotron from './components/Jumbotron/Jumbotron'
import { Link, Redirect } from "react-router-dom";

const SavedPage = () => {
    return (
    <div>Saved Page
    {/* <JumboTron/> */}
    <Link to="/search" role="button" >Sign Up</Link>
    </div>
    )
}

export default SavedPage;

