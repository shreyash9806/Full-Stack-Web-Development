import React from 'react'

function Inches({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (0.0833333 * value).toFixed(6),
                [name]: value,
                ["yards"]: (0.0277778 * value).toFixed(6),
                ["miles"]: (1.5783e-5 * value).toFixed(6),
                ["meters"]: (0.0254 * value).toFixed(6),
                ["cm"]: (2.54 * value).toFixed(6),
                ["km"]: (2.54e-5 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="inches">Inches</label>
            <input type="number"
                id='inches'
                name='inches'
                onChange={conversionHandler}
                value={convert.inches}
            />
        </div>
    )
}

export default Inches