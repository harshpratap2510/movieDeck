import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='text-center bg-neutral-700 text-neutral-400 p-2'>
       <div className='flex items-center justify-center gap-5'>
       <Link to={"/"}>About</Link>
       <Link>Contact</Link>
       </div>
       <p className='text-sm'>Created By Harsh Pratap Singh</p>
      </footer>
    </div>
  )
}

export default Footer
