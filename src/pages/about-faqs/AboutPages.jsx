import React from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const AboutPages = () => {

    const location = useLocation();

    console.log('we are en Route: ', location.pathname);

    const history = useNavigate();

    const navigate = (path) => {
        history(path);
    }

    const goBackHist = () => {
        history(-1);
    }

    const goForward = () => {
        history(1);
    }


    return (
        <div>
            <h1>
                About | FAQs Page
            </h1>
            <div>
                <button onClick={() => {
                    navigate('/');
                }}>
                    Go To Home
                </button>
                <button onClick={goBackHist}>
                    Go back
                </button>
                <button onClick={goForward}></button>
            </div>
        </div>
    );
}

export default AboutPages;
