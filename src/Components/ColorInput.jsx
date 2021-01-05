import React from 'react';

function ColorInput() {
    const handleSubmit = e => {
        e.preventDefault()
        let inp = document.querySelector('input');
        document.body.style.backgroundColor = inp.value;
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className='color' type='text' placeholder='#lololo' />
            <button type='submit'>Задать фон</button>
        </form>
    );
}

export default ColorInput;
