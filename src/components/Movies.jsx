import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import index from '../assets/index'
import { Link } from "react-router-dom";


function Movies({ searchInfo ,dataMovies }) {

    const apiUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bdc5e0db2b05f69027de41136e5c469d&query=";

    const [movies, setMovies] = useState([]);

    

    useEffect(() => {
        const getMovie = () => {
            fetch(apiUrl)
                .then(response => response.json())
                .then(response => {
                    setMovies(response.results);
                    dataMovies(response.results);
                })
    
        }
        getMovie();
        
    }, [searchInfo,dataMovies])






    return (
        <div className='flex flex-wrap justify-start pl-12  mb-8 items-end' >
            {
                movies.filter((movie) => movie.title.toLowerCase().includes(searchInfo.toLowerCase())).length !== 0 ?
                    movies.filter((movie) => movie.title.toLowerCase().includes(searchInfo.toLowerCase())).map((movie) =>
                    (
                        <Link key={movie.id} to={`/${movie.title.replaceAll(' ', '').toLowerCase()}`} >
                            <Movie  {...movie} />
                        </Link>
                    )
                    ) : <div className='flex flex-col items-center animated ml-8 mt-8'>
                        <img src={index.nores} alt="" />
                        <p className='font-bold'>Sorry,no films with this name</p>
                    </div>
            }
        </div>


    )
}

export default Movies