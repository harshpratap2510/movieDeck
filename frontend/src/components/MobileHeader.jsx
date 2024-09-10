import React from 'react'
import { mobileNavigation } from '../constants/NavigationConsts'
import { NavLink } from 'react-router-dom'

const MobileHeader = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-xl z-40 bottom-0 w-full fixed'>
        <div className='flex items-center justify-between h-full'>
            {
                mobileNavigation.map((nav)=>{
                    return(
                     <NavLink key={nav.label + "mobilenavigation"} to={nav.href}
                     className={({isActive})=> `px-3 flex flex-col justify-center items-center h-full ${isActive && 'text-white'}`}
                     >
                        <div className='text-2xl'>
                            {nav.icon}
                        </div>
                        <p className='text-sm'>{nav.label}</p>
                     </NavLink>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MobileHeader
