import React from 'react'
import { useState } from 'react';
function Child1(props) {
    const [countinChild1, setCountInChild1] = useState(0);
    function updateCountinChild1() {
        setCountInChild1(countinChild1 + 1)
        props.onCountUpdate(countinChild1 + 1)
    }
    return (
        <div>
            <p>Inside the child 1 : {countinChild1}</p>
            <button onClick={updateCountinChild1}>Increment </button>
        </div>
    )
}

export default Child1