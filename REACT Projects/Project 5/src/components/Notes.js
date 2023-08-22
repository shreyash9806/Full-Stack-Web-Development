import React, { useState } from 'react'
import SingleNote from './SingleNote';
function Notes() {
    const [curNote, setCurNote] = useState('')
    function updateCurNote(event) {
        setCurNote(event.target.value);
    }
    const [notes, setNotes] = useState([]);
    function addNote() {
        const newNotesArray = [...notes, curNote];
        setNotes(newNotesArray);
    }


    return (
        <>
            <h1>Practice Part</h1>
            <p>Real Time Value of input is : {curNote}</p>
            <input onChange={updateCurNote} type="text" />
            <button onClick={addNote}>Submit</button>
            <ul className='ulStyle'>
                {notes.map((element, index) => {
                    return <li key={index}>
                        <SingleNote note={element} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default Notes