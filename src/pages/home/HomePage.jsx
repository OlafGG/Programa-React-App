import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

    

const HomePage = () => {

    const location = useLocation();

    console.log('we are en Route: ', location.pathname);

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    const navigateProps = (path) => {
        history({
            pathname: path,
            search: '?online=true',
            state: {
                online: true
            }
        });
    }

    return (
        <div>
            <h1>
                Home Page
            </h1>
            <button onClick={() => {navigate('/profile')}}>
                Go to Profile
            </button>
            <button onClick={() => {navigateProps('/online-state')}}>
                Go to Page State / Query Params
            </button> 
        </div>
    );
}

export default HomePage;
