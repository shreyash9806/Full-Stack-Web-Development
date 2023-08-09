import React, { useState } from 'react'
import Card from './Card';
function Cards({ courses, category }) {
    // console.log(courses);

    // console.log(otherCategory);
    const [liked, setliked] = useState([]);
    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course) => {
                    allCourses.push(course);
                })
            })
            return allCourses;
        }
        else {
            return courses[category];
        }
    }

    // console.log(getCourses());
    return (
        <div className='gridBox'>
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course}
                        liked={liked}
                        setliked={setliked} />
                })
            }
        </div>
    )
}

export default Cards