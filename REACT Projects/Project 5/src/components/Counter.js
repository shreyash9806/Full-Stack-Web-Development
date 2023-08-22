import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    // let countState = useState(0);
    // let count = countState[0];
    // let setCount = countState[1];


    function updateCount() {
        setCount(count + 1);
    }
    return (
        <div>
            <p>The Value Of count is: {count}</p>
            <button onClick={updateCount}>Increment</button>
        </div>
    )
}

export default Counter
// click onClick