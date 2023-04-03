/**
 * Ejemplo de HOoks: 
 * useState()
 * useContext()
 * importante con datos, pasandoselo a componentes
 */

import React, {useState, useContext} from 'react';

/**El componente dispone de un contexto
 * que tendra un valor que recibe desde el padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {
    
    //Inicializamos un estado
    //datos del contexto
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}



const Componente2 = () => {
    
    const state  = useContext(miContexto);

    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiContextoConContexto() {
  
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }
    
    //creamos el estado del componente
    const [sessionData, setSessionData] = useState(estadoInicial);
    
    function actualizarSesion() {
        setSessionData({
            token: 'JWT123456789',
            sesion: sessionData.sesion + 1
        });
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/**Todo lo que este dentro puede leer los datos */}
            {/**Actualiza los componetnes */}
            <h1>**** Ejemplo de useState() y useContext()****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
  )
}
