import React, { useState, useEffect } from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import userIcon from "../assets/user.png"
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../constants/NavigationConsts.jsx';



const Header = () => {

  const location = useLocation()
  
  const removeSpace = location.search?.slice(3)?.split("%20")?.join(" ")

  const [searchInput, setsearchInput] = useState(removeSpace)
  const navigate = useNavigate();


  useEffect(() => {
    if (searchInput)
      navigate(`/search?q=${searchInput}`)

  }, [searchInput]);


  const handleSubmit = ((e) => {
    e.preventDefault();
  });

  return (
    <div className='relative z-40'>
      <div className='fixed top-0 w-full h-16 bg-neutral-800 bg-opacity-50'>
        <div className=' container mx-auto px-3 flex items-center h-full'>
          <Link to="/">
            <img src={logo} alt="" width={120} />
          </Link>

          <nav className='hidden lg:flex items-center gap-2 ml-5'>
            {
              navigation.map((nav, index) => {
                return (
                  <div key={nav.label + index}>
                    <NavLink  to={nav.href} className={({ isActive }) => `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                      {nav.label}
                    </NavLink>
                  </div>
                )
              })
            }
          </nav>

          <div className='ml-auto flex gap-6 items-center'>

            <form action="" className='flex items-center ' onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder='Search here...'
                className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                onChange={(e) => setsearchInput(e.target.value)}
                value={searchInput}
              />

              <button className='text-2xl text-white' >
                <IoSearchOutline />

              </button>
            </form>


            <div className='w-8 h-8 rounded-full overflow-hidden lg:mr-4 cursor-pointer active:scale-50 transition-all'>
              <img src={userIcon} alt="" className='h-full w-full' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header
