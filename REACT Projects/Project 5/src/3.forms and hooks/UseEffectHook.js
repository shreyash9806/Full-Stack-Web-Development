import React, { useEffect, useState } from 'react'

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log("First Time Mounted");
    }, [])

    useEffect(() => {
        console.log(name, "Name Updated");
    }, [name])

    useEffect(() => {
        console.log("On every re-render");
    })
    return (
        <div style={{ textAlign: "center" }}>
            <label style={{ marginRight: "20px" }} htmlFor="">Name</label>
            <input onChange={(e) => { setName(e.target.value) }} type="text" />
            <p>{count}</p>
            <button onClick={(e) => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default UseEffectHook