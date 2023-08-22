import React from 'react'

function SingleNote(props) {
    return (
        <div>
            <p className='noteStyle'>
                {props.note}
            </p>
        </div>
    )
}

export default SingleNote