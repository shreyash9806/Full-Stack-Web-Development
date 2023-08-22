import React from 'react'

function Yards({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (3 * value).toFixed(6),
                [name]: value,
                ["inches"]: (36 * value).toFixed(6),
                ["miles"]: (0.000568182 * value).toFixed(6),
                ["meters"]: (0.9144 * value).toFixed(6),
                ["cm"]: (91.44 * value).toFixed(6),
                ["km"]: (0.0009144 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="yards">Yards</label>
            <input type="number"
                id='yards'
                name='yards'
                onChange={conversionHandler}
                value={convert.yards}
            />
        </div>
    )
}

export default Yards