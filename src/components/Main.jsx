import React from 'react'
import Searchbar from "./Searchbar";
import Movies from "./Movies";
import { useState } from "react";
import { Outlet } from "react-router-dom";


const Main = () => {
    
    const [info, setInfo] = useState("")

    const handleInfo = (data) => {
        setInfo(data);
    }
    
    return (
        <>
            <Searchbar onSubmit={handleInfo} />
            <Movies searchInfo={info} />
            <Outlet />
        </>
    )
}



export default Main