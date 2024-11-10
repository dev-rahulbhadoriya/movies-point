import React from 'react'
import { Card } from '../components'

export const MoviesList = () => {
    return (
        <main>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        </main>
    )
}
