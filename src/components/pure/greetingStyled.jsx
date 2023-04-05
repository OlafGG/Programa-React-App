import React, { useState } from 'react';


const loggedStyle = {
    color: 'white'
}

const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const GreetingStyled = (props) => {

    const [logged, setLoged] = useState(false);

    const greatingUser = (<p>Hola, {props.name}</p>);
    const PleaseLoging = (<p>No estas logeado</p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle}>
            {logged ? greatingUser : PleaseLoging}
            <button onClick={() => {
                console.log('boton pulsado');
                setLoged(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>

        </div>
    );
}

export default GreetingStyled;
