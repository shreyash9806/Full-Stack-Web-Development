import React, { useEffect, useRef, useState } from 'react'
import AddNotes from './AddNotes';
import './style.css'
function Notes() {
    const [notes, setNotes] = useState([]);
    const [curNotes, setCurNotes] = useState("")
    const inputRef = useRef(null);

    function updateCurNotes(e) {
        setCurNotes(e.target.value)
    }
    function addNotes() {
        const inputValue = inputRef.current.value;
        if (inputValue === '') {
            return alert('Fill the Details');
        }
        const newNotesArray = [...notes, curNotes]
        setNotes(newNotesArray)
        setCount(count - 1)
    }

    function noteREmover(id) {
        const remover = notes.filter((note, index) => {
            return index !== id;
        })
        setNotes(remover);
    }
    const [count, setCount] = useState(200);

    return (
        <div className='container'>
            <h1 className='heading'>Notes</h1>
            <div className='mid-container'>
                <input placeholder='type to search...' className='search-style' type="text" />
                <p><i class="fa-solid fa-magnifying-glass"></i></p>
            </div>
            <div className='grid-box'>
                {
                    notes.map((notes, id) => {
                        return <AddNotes key={id} notes={notes} id={id} noteREmover={noteREmover} setCount={setCount} count={count} />
                    })
                }
                <div className="note-maker">
                    <input placeholder='Type to add a note...' className='input-style' ref={inputRef} onChange={updateCurNotes} type="text" />
                    <button className='save-btn' onClick={addNotes}>Save</button>
                    <p>{count} remaining</p>
                    <button className='reload' onClick={() => { inputRef.current.value = "" }}><i class="fa-solid fa-rotate-left"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Notes