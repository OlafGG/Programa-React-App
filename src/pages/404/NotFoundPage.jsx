import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {

    const history = useNavigate();


    return (
        <div>
            <h1>
                404 - Page Not Found
            </h1>

            <button onClick={() => history('/')
            }>Go back to home</button>
        </div>
    );
}

export default NotFoundPage;
