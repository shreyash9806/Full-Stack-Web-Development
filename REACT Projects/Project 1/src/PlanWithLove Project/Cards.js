import React, { useState } from 'react'
import './style.css'

function Cards({ id, name, price, image, info, removeHandler }) {

    const [readMore, setReadMore] = useState(false)
    const infoDesc = readMore ? info : `${info.substring(0, 200)}...`;

    const remove = () => {
        removeHandler(id);
    }
    return (
        <div className='cards-style'>
            <div className='img-box'>
                <img style={{
                    width: "100%"
                    , height: '100%', objectFit: "cover", marginInline: 'auto', display: 'block'
                }} src={image} />
            </div>

            <div className='text-alignment'>
                <div className="price">
                    <i class="fa-solid fa-indian-rupee-sign"></i> {price}
                </div>
                <div className='name-box'>
                    {name}
                </div>
                <div className='description-box'>
                    {infoDesc}
                    <span className='read-more' style={{ cursor: "pointer" }} onClick={() => { setReadMore(!readMore) }}>
                        {readMore ? ' Show Less' : 'Read More'}
                    </span>
                </div>
            </div>

            <div className='btn-style'>
                <button onClick={remove}>
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Cards