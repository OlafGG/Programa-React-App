import React, {useState} from 'react';
import PropTypes from 'prop-types';


const Fgreeating = (props) => {

    //Introduccion al useState
    //const [variable, metodo para actualizar] = useState(valor inicial)
    const [age, setage] = useState(29);

    const birthday = () => {
        //Actualizar el state
        setage(age + 1);
    }


    return (
        <div>
                <h1>
                    Hola {props.name} desde tu componente funcional!
                </h1>
                <h2>
                    Tu edad es de: {age}
                </h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    );
};


Fgreeating.propTypes = {
    name: PropTypes.string
};


export default Fgreeating;
