import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import index from './assets/index'
import Footer from "./components/Footer";
import Main from "./components/Main";
import Moviepage from "./components/Moviepage";


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  const [movies, setMovies] = useState([])

  const apiUrl = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=bdc5e0db2b05f69027de41136e5c469d&query=";


  const getMovie = useCallback(async ()=> {
    fetch(apiUrl)
        .then(response => response.json())
        .then(response => setMovies(response.results))
  },[])

  useEffect(() => {
    getMovie();
  }, [getMovie])

  return (
    <BrowserRouter>
      <div className="App">
        
          <Link to="/" className="flex items-end font-bold text-2xl" > <img className="ml-4" src={index.logo} width={200} alt="logo" />  <h1  className="mb-2">TO WATCH</h1></Link>
         
        

        <Routes>
          <Route path="/" element={<Main  />} />

          {movies.map((movie) => (
            <Route key={movie.id} path={`/${movie.title.replaceAll(' ', '').toLowerCase()}`} element={<Moviepage {...movie} />} />
          ))
          }
        </Routes>
        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
