import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import index from '../assets/index'

function Movies({ searchInfo }) {

    const apiUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bdc5e0db2b05f69027de41136e5c469d&query=";

    const [movies, setMovies] = useState([]);

    const getMovie = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => setMovies(response.results))
    }

    useEffect(() => {
        getMovie();
    }, [searchInfo])





    return (
       
            <div className='flex flex-wrap justify-start ml-4 items-end' style={{if(){}    }}  >{

                movies.filter((movie) => movie.title.toLowerCase().includes(searchInfo.toLowerCase())).length !== 0 ?
                    movies.filter((movie) => movie.title.toLowerCase().includes(searchInfo.toLowerCase())).map((movie) =>
                    (
                        <Movie key={movie.id} {...movie} />
                    )
                    ) : <div className='flex flex-col items-center animated'>
                        <img  src={index.nores} alt="" />
                        <p className='font-bold'>Sorry,no films with this name</p>
                    </div>
            }</div>
        

    )
}

export default Movies