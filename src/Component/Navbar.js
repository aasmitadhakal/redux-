import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-between bg-blue-500'>
        <div>Redux store</div>
        <div>
            <Link className ='text-black-500 ml-24 text-3xl font-bold underline' to ='/'>Home</Link>
            <Link  className ='text-black-500 ml-24' to ='/cart'>Cart Item</Link>
            <span className=''>cart items:0</span>

        </div>

    </div>
  )
}

export default Navbar