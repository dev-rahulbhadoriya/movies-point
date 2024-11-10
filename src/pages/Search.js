import React, { useEffect, useState } from 'react'
import { Card } from '../components'
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';
export const Search = ({apiPath}) => {
  const [ searchParams ] = useSearchParams()
  const querySearch = searchParams.get("q")
  const { data : movies } = useFetch(apiPath, querySearch) 
  return (
    <main>
      <section className='py-2'>
        <p className='text-3xl text-gray-700 dark:text-white'>{movies.length ===0 ? `No result found for '${querySearch}'`: `Result found '${querySearch}'` }</p>
      </section>
      <section className='max-w-7xl mx-auto py-7'>
        <div className='flex justify-start flex-wrap'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} /> 
          ))}
        </div>
      </section>
    </main>
  ) 
}
