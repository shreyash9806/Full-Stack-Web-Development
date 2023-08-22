import React from 'react'

function Kilometers({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (3280.84 * value).toFixed(6),
                ["inches"]: (39370.1 * value).toFixed(6),
                ["yards"]: (1093.61 * value).toFixed(6),
                [name]: value,
                ["miles"]: (0.621371 * value).toFixed(6),
                ["meters"]: (1000 * value).toFixed(6),
                ["cm"]: (100000 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="km">Kilometers</label>
            <input type="number"
                id='km'
                name='km'
                onChange={conversionHandler}
                value={convert.km}
            />
        </div>
    )
}

export default Kilometers