/**ejemplo de uso de los hooks
 * - UseState()
 * - useReft()
 * - UseEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    //Creacion de dos contadores
    //En estados distintos 
    const [conta1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    /**Crear una referencia para unirlo a un elemento del DOM */

    const miRef = useRef();

    function incrementar1() {
        setContador1(conta1 + 1);
    }
    function incrementar2(){
        setContador2(contador2 + 1);
    }

    /**Use effect */

    /**useEffect(() => {
        
        console.log('Cambio del estado de componente');
        console.log('Mostrando referencias en el DOM: ');
        console.log(miRef);
    })*/

    /**caso 2
     * Solo en algunos casos
     * Sera un iff para que funcione
     */
    /*useEffect(() => {
        
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Refetencia a elementos del DOM: ');
        console.log(miRef);
    }, [conta1]);*/

    /**Caso 2:  ejecutar un cambbio con contador 1 */

    useEffect(() => {
        console.log('CAMBIO DEL ESTADO DEL CONTADOR 1 O CONTADOR 2');
        console.log('Mostrando Referencia a elemento del DOM: ')
        console.log(miRef);
        
    }, [conta1, contador2]);

    


    return (
        <div>
            <h1>
                *** Ejemplo de useEffect(), useState(), useRef() ***  
            </h1>
            <h2>
                CONTADOR1: {conta1}
            </h2>
            <h2>
                CONTADOR2: {contador2}
            </h2>
            
             {/**Elemento Referenciado*/}
            <h4 ref={miRef}>
                Ejemplo de el elemento Referenciado:
            </h4>
            {/**Botones para cambiar contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>

            </div>
        </div>
    );
}

export default Ejemplo2;
