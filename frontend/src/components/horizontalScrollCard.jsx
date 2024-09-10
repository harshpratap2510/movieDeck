import React, { useRef } from 'react'
import Card from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const horizontalScrollCard = ({data=[],heading,trending,media_type}) => {
    const containRef = useRef() 

    
  const handleNext = () =>{ 
   containRef.current.scrollLeft += 300 ;
  }

  const handleprevious = () =>{
    containRef.current.scrollLeft -= 300 ;
  }

  return (
    <div className='w-full h-full px-3 my-10'>
    <div className='mx-auto max-w-screen-xl'>
    <h2 className='text-xl lg:text-2xl font-bold mb-6 capitalize'>{heading}</h2>
  
  <div className='relative w-full h-full scrol1bar-none'> 
    <div ref={containRef} className=' flex gap-6 overflow-x-scroll scroll-smooth relative z-10 transition-all'>
   
    {data?.map((data,index)=>{
      return (
        <div key={data.id + "heading"}>
           <Card  data={data} index={index+1} trending= {trending} media_type={media_type} />
             
        </div>
      )
    })} 
    </div>

    <div className='absolute top-0 hidden w-full h-full items-center  justify-between px-4  lg:flex'>
                <button onClick={handleprevious} className='bg-white  p-1 rounded-full  text-xl z-10 text-black'>
                  <FaAngleLeft /> 
                </button>
                <button onClick={handleNext} className='bg-white p-1 rounded-full  text-xl z-10 text-black '>
                  <FaAngleRight />
                </button>
             
              </div>

              </div>
    </div>
  </div>
  )
}

export default horizontalScrollCard
