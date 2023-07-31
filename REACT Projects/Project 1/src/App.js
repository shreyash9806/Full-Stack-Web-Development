import React, { useState } from 'react'
import data from './data'
import Tours from './PlanWithLove Project/Tours'
function App() {
  const [tours, setTours] = useState(data);
  const removeHandler = (id) => {
    const newTours = tours.filter((tours) => {
      return tours.id !== id;
    })
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h3>No tours Left</h3>
        <button onClick={() => {
          setTours(data);
        }}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} removeHandler={removeHandler} />
    </div>
  )
}

export default App
