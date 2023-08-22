import React from 'react'

function Miles({ setconvert, convert }) {
    function conversionHandler(e) {
        const { value, name } = e.target;
        setconvert((prevState) => {
            return {
                ...prevState,
                ["feet"]: (5280 * value).toFixed(6),
                ["inches"]: (63360 * value).toFixed(6),
                ["yards"]: (1760 * value).toFixed(6),
                [name]: value,
                ["meters"]: (1609.34 * value).toFixed(6),
                ["cm"]: (160934 * value).toFixed(6),
                ["km"]: (1.60934 * value).toFixed(6),
            }
        })
    }
    return (
        <div>
            <label htmlFor="miles">Miles</label>
            <input type="number"
                id='miles'
                name='miles'
                onChange={conversionHandler}
                value={convert.miles}
            />
        </div>
    )
}

export default Miles