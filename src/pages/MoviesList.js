import React, { useEffect, useState } from 'react'
import { Card } from '../components'

export const MoviesList = () => {
    const [movies, setMovies] = useState([])
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTkzNDY5OWZkZWY5ZjdlNDMyMjMyYTJkNGEzYWJmYiIsIm5iZiI6MTczMTE0OTI3NC4yODUwMzEsInN1YiI6IjY3MmYzNGQ5MTc3MGIwMzUxZGUzNzhkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iTSRQvqh9tqn1sM9N5tgdMqJNeYNOezuVYKmzZyPMqk'
      }
    };
    
    useEffect(()=>{
        async function fetchMovies(){
            let response = await fetch(url, options)
            let data = await response.json()
            console.log(data.results)
            setMovies(data.results)
        }
        fetchMovies()
    }, [])
    return (
        <main>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>
                    {movies.map((movie)=>(
                      <Card key={movie.id} movie= {movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}
