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
        email : 'baezauriel01@gmail.com'
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
        setPersona({
            nombre: 'Pepe',
            email: 'pepeproblemspica@gmail.com'
        })
    }

    return (
        <div>
            <h1>
                Ejemplo de use State: 
            </h1>
            <h2>
                Contador: {contador}
            </h2>
            <h2>
                El nombre de la persona: 
            </h2>
            <h3>
                Nombre: {persona.nombre}
            </h3>
            <h4>
                Email: {persona.email}
            </h4>
             {/**Botones sexys aros */}
            <div>
                <button onClick={incrementarContador}>incrementar Contador</button>
                <button onClick={actualizarPersona}>Avtualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
