import React from 'react'

function Filter({ filterData, setCategory, category }) {
    function clickHandler(title) {
        setCategory(title);
    }
    console.log(category);
    return (
        <div className='courses-align'>
            {
                filterData.map((course) => {
                    return <button
                        onClick={() => { clickHandler(course.title) }}
                        className='buttonStyle' key={course.id}>{course.title}</button>
                })
            }
        </div>
    )
}

export default Filter