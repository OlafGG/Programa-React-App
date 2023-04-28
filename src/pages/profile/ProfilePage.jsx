import React from 'react';
import { useHistory } from 'react-router-dom'

const ProfilePage = ({user}) => {
    
    

    const goBackHistory = useHistory();

    const navigteTo = (path) => {
        goBackHistory.push(path);
    }
    const goBack = () => {
        goBackHistory.goBack();
    }

    return (
        <div>
            <h1>Your Profil page</h1>
            <button onClick={navigteTo('/tasks')}>Tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
