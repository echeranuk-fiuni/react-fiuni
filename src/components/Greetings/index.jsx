import React from 'react';

const Greetings = props => {
    const { goodbye = true, fullName = 'Desconocido', onChangeGreeting = () => {} } = props;
    return (
        <>
            <h1 style={{color: 'red', fontSize: 14}}>{goodbye ? 'Adios' : 'Hola'} Mundo!</h1>
            <h2 className='blueText'>Mi nombre es {fullName}.</h2>
            <div>
                <button onClick={onChangeGreeting}>Cambiar Saludo</button>
            </div>
        </>
    );
};

export default Greetings;