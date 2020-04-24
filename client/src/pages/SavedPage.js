import React from 'react';
import { Link, Redirect } from "react-router-dom";
import CardWrapper from '../components/CardWrapper/CardWrapper'

const SavedPage = () => {
    return (
    <div>Saved Page
    <CardWrapper/>
    <Link to="/search" role="button" >Sign Up</Link>
    </div>
    )
}

export default SavedPage;

