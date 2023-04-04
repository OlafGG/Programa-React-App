/**
 * Ejemplo de uso del metodo
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component, useEffect } from 'react';

/**
 * Clase
 */
export class DidMount extends Component {
    
    componentDidMount(){
        console.log('Comportamiento antes de que el componente se añadido y se renderice')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


/**
 * 
 * Funcion Hook
 */
export const DidMountHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea aañadido al DOM')
    }, []);
    
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

