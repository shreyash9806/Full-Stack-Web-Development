import React from 'react'
import Cards from './Cards'
import './style.css'
function Tours({ tours, removeHandler }) {

    return (
        <div className='Div-style'>
            <div className='header-style'>
                <h2>Plan with love</h2>
            </div>
            <div className='cards-align'>
                {
                    tours.map((tour) => {
                        return <Cards {...tour} removeHandler={removeHandler} />
                    })
                }
            </div>
        </div>
    )
}

export default Tours