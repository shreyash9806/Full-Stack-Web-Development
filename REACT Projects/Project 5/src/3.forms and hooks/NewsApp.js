import React, { useEffect, useRef, useState } from 'react'
import News from './News';
function NewsApp() {

    const [query, setquery] = useState('tesla')
    const queryInputRef = useRef(null);
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-07-03&sortBy=publishedAt&apiKey=c9ed87834c394cd79a09047457cbbc0d`
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [query])

    async function fetchData() {
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            setNewsList(jsonData.articles)
        }
        catch (error) {
            console.log(error, "error Occured");
            setNewsList([])
        }

    }
    function clickHandle(id) {
        const NewnewsList = newsList.filter((news, index) => {
            return index !== id;
        })
        setNewsList(NewnewsList);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const queryValue = queryInputRef.current.value;
        if (queryValue === '') {
            return alert("Fill the required fields")
        }
        setquery(queryValue)
    }
    if (newsList.length === 0) {
        return (
            <div className='align'>
                <h2 style={{ marginBottom: "20px", border: "2px dashed black", padding: "10px 20px", borderRadius: "20px", fontWeight: "400" }}>No News Available</h2>
                <button onClick={() => {
                    setquery('apple');
                    fetchData();
                }} className='btn-nt'>Refresh Page</button>
                <form className='form-style' onSubmit={handleSubmit}>
                    <div className='inputs-align'>
                        <input className='input-style' ref={queryInputRef} type="text" />
                        <input className='input-button-style' onClick={handleSubmit} type="submit" value="News Search" />
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div>
            <form className='form-style' onSubmit={handleSubmit}>
                <h1 className='form-Heading'>News Daily</h1>
                <div className='inputs-align'>
                    <input className='input-style' ref={queryInputRef} type="text" placeholder='Search News' />
                    <input className='input-button-style' onClick={handleSubmit} type="submit" value="News Search" />
                </div>
            </form>
            <div className='GridBox'>
                {
                    newsList.map((news, index) => {
                        return <News key={index} news={news} clickHandle={clickHandle} id={index} />
                    })
                }
            </div>
        </div>
    )
}

export default NewsApp