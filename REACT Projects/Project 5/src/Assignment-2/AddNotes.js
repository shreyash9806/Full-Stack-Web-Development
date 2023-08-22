import React from 'react'

function AddNotes({ notes, noteREmover, id, setCount, count }) {
    const date = new Date();
    return (
        <div className='note-maker-1'>
            <p className='notes'>{notes}</p>
            <p className='date'>{date.toDateString()}</p>
            <div className='trash' onClick={() => { noteREmover(id); setCount(count + 1) }}><i class="fa-solid fa-trash"></i></div>
        </div>
    )
}

export default AddNotes