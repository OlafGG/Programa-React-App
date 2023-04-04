import React, { Component } from "react";

class LifeCycleExample extends Component {
    
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente');
    }

    componentWillMount(){
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount(){
        console.log('DIDMOUNTR: Justo al acabar el montaje del componente antes de pintarlo');
    }
    componentWillReceiveProps(nextProps){
        console.log('WILLRECIVEPROPS: Si va a recibir props');
    }

    shouldComponentUpdate(){
        /**
         * Controlador si el componente debe o no actualizarse
         * regresa solo true o false
         */
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componetnWillUpdate: justo antes de actualizar');
    }

    componentDidUpdate(){
        console.log('DIDUPDATE: Justo despues de actualizarse');
    }

    componentWillUnmount(){
        console.log('WillUnmount: Justo antes de desaparecer');
    }

    render(){
        return(
            <div></div>
        )
    }
}