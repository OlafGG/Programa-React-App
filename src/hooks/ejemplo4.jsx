/**
 * Ejemplo para entender los props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo de children props</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            {/**Props.children modificaran las cosas */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;
