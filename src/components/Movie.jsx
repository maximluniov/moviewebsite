import React from 'react'

function Movie(movie) {
    const imgUrlBase = "https://image.tmdb.org/t/p/w500"
    return (
        <div className='w-44 my-8 mx-3 flex flex-col animated'>
            <div className='flex justify-between items-end font-bold'>
                <h1>{movie.title}</h1>
                <p>{movie.vote_average.toFixed(1)}</p>
            </div>

            <img  src={imgUrlBase + movie.poster_path} alt="poster" />
        </div>
    )
}

export default Movie