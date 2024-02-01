import React from 'react'
import Searchbar from "./Searchbar";
import Movies from "./Movies";
import { useState } from "react";
import { Outlet} from "react-router-dom";


function Main({dataMovies}) {

    const [info, setInfo] = useState("")

    const handleInfo = (data) => {
        setInfo(data);
    }

   const handleDataMovies =(event) =>{
    dataMovies(event);
   }

    return (
        <div>
            <Searchbar  onSubmit={handleInfo} />
            <Movies dataMovies={handleDataMovies} searchInfo={info} />
            <Outlet/>
        </div>
    )
}

export default Main