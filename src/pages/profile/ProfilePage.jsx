import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom'

const ProfilePage = ({user}) => {
    
    
    const history = useNavigate();


    const goBackHistory = useNavigate();

    const navigteTo = (path) => {
        goBackHistory(path);
    }
    const goBack = () => {
        goBackHistory(-1);
    }

    return (
        <div>
            <h1>Your Profil page</h1>
            <button onClick={() => {navigteTo('/tasks')}}>
                Tasks
            </button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
}

export default ProfilePage;
