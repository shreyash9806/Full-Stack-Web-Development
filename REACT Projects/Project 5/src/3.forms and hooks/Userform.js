import React, { useRef, useState } from 'react'

function Userform() {

    const inputValue = useRef(null);
    const selectInput = useRef(null);
    const clickhandler = (event) => {
        event.preventDefault();
        const inputValueop = inputValue.current.value;
        const selectInputValue = selectInput.current.value;
        alert(inputValueop + " " + selectInputValue);
    }
    function handleChange(e) {
        console.log(e.target.value);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <form onSubmit={handleChange} >
                <label style={{ marginRight: "20px" }} htmlFor="text">Text</label>
                <input ref={inputValue} id='text' type="text" />
                <br />
                <select ref={selectInput} onChange={handleChange}>
                    <option value="GrapeFruit">GrapeFruit</option>
                    <option value="Lime">Lime</option>
                    <option value="Oragens">Oragens</option>
                    <option value="Soda">Soda</option>
                </select>
                <br />
                <button onClick={clickhandler}>Submit</button>
            </form>
        </div>
    )
}

export default Userform