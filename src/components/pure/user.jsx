import React from 'react';
import PropTypes from 'prop-types';
import { User } from '../../models/user.class';
import { Task } from '../../models/task.class';


const UserComponents = ({ User }) => {
    return (
        <div>
            <h2>
                Nombre: {User.name}
                Apellido: {User.lastName}
            </h2>
            <h3>
                Email: {User.mail}
            </h3>
            <h4>
                This user is: { User.connected ? 'CONNECTED':'NO CONNECTED'}
            </h4>
        </div>
    );
};


UserComponents.propTypes = {
    user: PropTypes.instanceOf(User)
};


export default UserComponents;
