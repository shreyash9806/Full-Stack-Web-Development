import React, { useState } from 'react'
import './revise.css'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Card({ course, liked, setliked }) {
    const [color, setColor] = useState(true);
    function clickHandler() {
        if (liked.includes(course.id)) {
            setliked((prev) => prev.filter((cid) => {
                return cid !== course.id;
            }))
            toast.warning("Liked Removed")
            setColor(!color);
        }
        else {
            if (liked.length === 0) {
                setliked([course.id])
            }
            else {
                setliked((prev) => [...prev, course.id])
            }
            toast.success("Liked Successfully")
            setColor(!color);
        }
    }
    return (
        <div className='card-style'>
            <div className='image'>
                <img width="100%"
                    style={{
                        borderTopLeftRadius: "10px"
                        , borderTopRightRadius: "10px"
                    }}
                    src={course.image.url} alt={course.image.alt} />
            </div>
            <div className="align">
                <div className="card-heading">
                    <p>{course.title}</p>
                </div>
                <div className="description">
                    <p>{course.description.substring(0, 100)}...</p>
                </div>
            </div>
            <button onClick={clickHandler} className='like-btn'>
                {/* <FcLike fontSize="1.75rem" /> */}
                {/* <FcLikePlaceholder fontSize="1.75rem" /> */}
                {
                    color ? <FcLikePlaceholder fontSize="1.75rem" /> :
                        <FcLike fontSize="1.75rem" />
                }
            </button>
            <ToastContainer />
        </div>
    )
}

export default Card