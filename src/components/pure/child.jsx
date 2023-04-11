import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Default Text: ${text}`);
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`);
    }

    function submitName (e) {
        e.preventDefault();
        update(nameRef.current.value);
    }


    return (
        <div style={{backgroundColor: 'cyan', padding: '30px'}}>
            <p onMouseOver={() => {console.log("Mouse over")}}>Hello, {name}</p>
            <button onClick={() => {console.log('Boton 1 pulsado')}}>Button 1</button>
            <button onClick={pressButton()}>Button 2</button>
            <button onClick={() => pressButtonParams('Hola')}>Button 3</button>
            <input 
                    placeholder='Insert a text' 
                    onFocus={() => console.log('Input Focused')}
                    onChange={(e) => {console.log('input changed: ', e.target.value)}}
                    onCopy={() => console.log('copied text from input')}
                    ref = {messageRef}
                    ></input>
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name' />
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
