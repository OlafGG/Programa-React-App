import React from 'react';

import { useLocation, useHistory } from 'react-router-dom';

const AboutPages = () => {

    const location = useLocation();

    console.log('we are en Route: ', location.pathname);

    const history = useHistory();

    const navigate = (path) => {
        history.push(path);
    }

    const goBackHist = () => {
        history.goBack();
    }

    const goForward = () => {
        history.goForward();
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
