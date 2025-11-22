import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
const Menu = () => {
  return (
    <div className='size-200 border border-black m-auto rounded-3xl bg-cyan-500 font-roboto-mono'>
      <h4 className='font-medium font-roboto-mono tracking-tight text-2xl text-center m-3'>Component's Menu</h4>
      <div id="list" className='h-full w-full '>
        <div id="navBar">

        <Link
        to={"/navbars"}
        className='w-12 h-25 px-4 py-3 rounded-3xl bg-red-600 border border-black'
        >
        NavBars 
        </Link>

        </div>
      </div>
    </div>
  )
}

export default Menu