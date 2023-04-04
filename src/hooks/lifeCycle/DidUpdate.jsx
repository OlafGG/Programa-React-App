/**
 * Ejemplo de uso de metodo componentDidUpdate
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidUpdate(){
        console.log('componente cuando recibe nuevas props o cambio en sus estado')
    }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}



export const DidUpdateHook = () => {
    
    useEffect(() => {
        console.log('Comportamiento cuiando el componente recibe nuevos props o cambio de estatura')
    });
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


