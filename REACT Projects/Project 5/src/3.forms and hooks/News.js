import React from 'react'
import './style.css'
function News({ news, clickHandle, id }) {

    const date = news.publishedAt.substring(0, 10);
    const time = news.publishedAt.substring(11, 100);
    return (
        <div className='cardsStyle'>
            <div className='upperStyle' style={{ height: "300px" }}>
                <img src={news.urlToImage} alt={news.author} />
            </div>
            <div className='bottomStyle'>
                <h4 className='heading'>{news.title}</h4>
                <p className='description'>{news.description}</p>
                <div>
                    <p className='date'><span>Date: </span>{date}</p>
                    <p className='time'><span>Time: </span>{time}</p>
                </div>
                <p className='author'><span>Author: </span>{news.author}</p>
                <div style={{ textAlign: 'center' }}>
                    <button onClick={() => { clickHandle(id) }} className='btn-nt'>Not Interested</button>
                </div>
            </div>
        </div>
    )
}

export default News