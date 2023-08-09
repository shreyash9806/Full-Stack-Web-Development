import React from 'react'

function Spinner() {
    return (
        <div className='SpinnerStyle'>
            <div class="custom-loader">

            </div>

            <p style={{
                color: "white",
                fontSize: "1.5rem",
                padding: "10px"
            }}>
                Loading...
            </p>
        </div>
    )
}

export default Spinner