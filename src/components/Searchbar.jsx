import React, { useState } from 'react'
// import Button from './Button'

function Searchbar({onSubmit} ) {

  const [text,setText]=useState("");

  const handleText = (event) => {
    setText(event.target.value);
    setTimeout(() => {
      onSubmit(event.target.value);
    }, 1000);
  }

  const handleKeyDown = (event) => {
    if (event.key ==='Enter'){
      onSubmit(text);
    }
  }

  // const handleSearch = () => {
  //   onSubmit(text);
  // }

  return (
        <div className='flex items-center p-4' >
            <input placeholder='   movie name here' type="text" id='input' onKeyDown={handleKeyDown}  onChange={handleText} value={text}  className='border-2 border-black-600 w-80 h-10 rounded mx-1 outline-none'/>
        </div>
  )
}

export default Searchbar