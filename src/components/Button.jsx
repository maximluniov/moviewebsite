import React from 'react'

function Button({children,...props}) {
  return (
    <button  {...props} className='w-20 h-10 rounded border-2 border-black-600 bg-blue-200'>
        {children}
    </button>
  )
}

export default Button