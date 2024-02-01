import React from 'react'
import { Link } from "react-router-dom";

const Moviepage = (movie) => {

    const imgUrlBase = "https://image.tmdb.org/t/p/w500"

    return (
        <div className='m-12'>
            <div className='flex my-8 justify-between'>
                <div>
                    <h1 className='text-3xl font-bold mb-3'>{movie.title}</h1>
                    <div className='flex '>
                        <img className='mr-8 border-8 border-solid border-sky-100' width={300} src={imgUrlBase + movie.poster_path} alt="moviepicture" />
                        <div>
                            <p>Release date: {movie.release_date}</p>
                            <br />
                            <p className='text-xl' style={{ width: "450px", height: "280px" }}>{movie.overview}</p>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-between items-center'>
                    <p className='underline underline-offset-1 ml-4'>Rate: {movie.vote_average}({movie.vote_count})</p>
                   <Link to="/"> <button className='animatedbutton w-20 rounded-md' style={{ backgroundColor:"#bababa"}}> Back </button></Link>
                   
                </div>
            </div>

        </div>
    )
}

export default Moviepage


