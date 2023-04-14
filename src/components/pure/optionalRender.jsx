// import { Button } from 'bootstrap';
import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue = 150;

const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//Login / logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}>Login</button>
    );
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    );
}


// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => no se renderiza la expresion





const OptionalRender = () => {
    
    const [access, setAccess] = useState(false);
    const [nMesssages, setNMesssage] = useState(0);

    // const updateAccess = () => {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let btnUpdate;

    // if (access){
    //     btnUpdate = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     btnUpdate = <button onClick={updateAccess}>Login</button>
    // }

    if (access){
        btnUpdate = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        btnUpdate = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    //Unread messages
    let addMessagges = () => {
        setNMesssage(nMesssages + 1)
    }
    return (
        <div>
            {/**Optional button */}
            { btnUpdate }
            {/**n messagess unread */}
            {/* { nMesssages > 0 && nMesssages === 1 && <p>You have {nMesssages} new messages</p> }
            { nMesssages > 1 && <p>You have {nMesssages} new messages</p> }
            { nMesssages === 0 && <p>There are no new messages</p>} */}
            
            {access ? (
                <div>
                    {/**Ternary Operator */}
                    { nMesssages > 0 ? 
                    <p>You have {nMesssages} new message{nMesssages > 1 ? 's' : null}</p> : 
                    <p>You have not messages</p> 
                    }
                    <button on onClick={addMessagges}>{nMesssages === 0 ? 'Add your first message' : 'Add new messsage'}</button>
                </div>
            ) : null}
        </div>
    );
}

export default OptionalRender;
