import React, { useEffect, useState } from 'react'

export const useFetch = (apiPath) => {

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const url = `https://api.themoviedb.org/3/${apiPath}?language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      }
    };

    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(url, options)
                if (!response.ok) {
                    throw new Error('Network response was not okay')
                }
                const json = await response.json()
                console.log("response", json.results)
                setData(json.results)

            } catch (err) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies();
    }, [url])
    return { data, error, loading }
}
