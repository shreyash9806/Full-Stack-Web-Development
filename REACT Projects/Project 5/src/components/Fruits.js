import React, { useState } from 'react'

function Fruits() {
    const [fruit, setFruit] = useState('Apple');
    const [inputText, setInputText] = useState('');
    function updateText(event) {
        setInputText(event.target.value);
    }
    return (
        <div>
            <p>The value of fruit is: {inputText}</p>
            <input type="text" onChange={updateText} />
            {/* <button onClick={updateFruit}>Submit</button> */}
            {/* <button onClick={() => setFruit("Banana")}>Banana</button>
            <button onClick={() => updateFruit('Guava')}>Guava</button> */}
        </div>
    )
}

export default Fruits