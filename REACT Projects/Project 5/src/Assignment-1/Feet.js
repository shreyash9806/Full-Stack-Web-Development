import React, { useState } from 'react'

function Feet({ setconvert, convert }) {

    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                [name]: value,
                ["inches"]: (12 * value).toFixed(6),
                ["yards"]: (0.333333 * value).toFixed(6),
                ["miles"]: (0.000189394 * value).toFixed(6),
                ["meters"]: (0.304800097536 * value).toFixed(6),
                ["cm"]: (30.480009753600000977 * value).toFixed(6),
                ["km"]: (0.00030480009753600003763 * value).toFixed(6),
            }
        })
    } console.log(convert);
    return (
        <div>
            <label htmlFor="feet">Feet</label>
            <input type="number"
                id='feet'
                name='feet'
                onChange={conversionHandler}
                value={convert.feet}
            />
        </div>
    )
}

export default Feet