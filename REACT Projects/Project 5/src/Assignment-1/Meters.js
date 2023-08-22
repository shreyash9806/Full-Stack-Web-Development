import React from 'react'

function Meters({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (3.28084 * value).toFixed(6),
                ["inches"]: (39.3701 * value).toFixed(6),
                ["yards"]: (1.09361 * value).toFixed(6),
                [name]: value,
                ["miles"]: (0.000621371 * value).toFixed(6),
                ["cm"]: (100 * value).toFixed(6),
                ["km"]: (0.001 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="meters">Meters</label>
            <input type="number"
                id='meters'
                name='meters'
                onChange={conversionHandler}
                value={convert.meters}
            />
        </div>
    )
}

export default Meters