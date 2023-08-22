import React, { useEffect, useRef, useState } from 'react'

function Hooks() {
    const [counter, setCounter] = useState(0);

    let normalCounter = 0;
    const refCounter = useRef(0);

    // It was called first on running our code
    useEffect(() => {
        console.log(counter, "State Counter");

        console.log(normalCounter, "Normal Counter");
        console.log(refCounter.current, "Ref Counter");

        return () => {
            console.log("Unmounting Component");
        }
    })

    function increment() {
        // They allow Rerendering
        setCounter(counter + 1);

        normalCounter = normalCounter + 1;

        // They Do not allow re-rendering
        refCounter.current = refCounter.current + 1;
    }
    return (
        <div style={{ textAlign: "center", margin: "40px", fontSize: "2rem" }}>
            <p>{counter}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Hooks