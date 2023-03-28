/**
 * Ejemplo de uso de los Hook useState
 * Crear un componente de tipo funcion y acceder a su estado
 * poder modificarlo
 */

import React, { useState} from 'react';

const Ejemplo1 = () => {

    // Valor inicial de una contador
    const valorInicial = 0;

    //Valor inicial para una persona

    const personaInicial = {
        nombre : 'Uriel',
        emil : 'baezauriel01@gmail.com'
    }

    /**
     * Queremos que el valor inicial  y personalisada 
     * se vea su cambio y se vea reflejado en la vista
     * del componente.
     * 
     * const [nombreVariable, funcion cambiar] = useState(valor inicial)
     * 
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * funcion para actualizar el contador
     */
    function incrementarContador() {
        //funcion ? para cambiar
        setContador(contador + 1);
    }

    function actualizarPersona() {
        
    }

    return (
        <div>
            
        </div>
    );
}

export default Ejemplo1;
