import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Filter from './Filter'
import Cards from './Cards'
import Spinner from './Spinner'
import { filterData } from './data'
import { apiUrl } from './data'
function Revise() {

    const [courses, setCourses] = useState([]);
    const [category, setCategory] = useState(filterData[0].title);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setLoading(true);
        try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            setCourses(jsonData.data);
        }
        catch (error) {
            console.log("Error Occured", error);
        }
        setLoading(false);
    }

    return (
        <div className='final-align'>
            <Navbar />

            <Filter filterData={filterData} category={category}
                setCategory={setCategory} />

            {
                loading ? <Spinner /> :
                    <Cards courses={courses}
                        category={category}
                    />
            }
        </div>
    )
}

export default Revise