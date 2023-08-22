import React from 'react'

function Cm({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (0.0328084 * value).toFixed(6),
                ["inches"]: (0.393701 * value).toFixed(6),
                ["yards"]: (0.0109361 * value).toFixed(6),
                [name]: value,
                ["miles"]: (6.2137e-6 * value).toFixed(6),
                ["meters"]: (0.01 * value).toFixed(6),
                ["km"]: (1e-5 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="cm">cm</label>
            <input type="number"
                id='cm'
                name='cm'
                onChange={conversionHandler}
                value={convert.cm}
            />
        </div>
    )
}
export default Cm