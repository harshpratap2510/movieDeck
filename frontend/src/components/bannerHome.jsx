import React from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';



const bannerHome = () => {

  const BannerData = useSelector(state => state.movieData.bannerData)
  const imageData = useSelector(state => state.movieData.imageURL)

  const [currentImage, setcurrentImage] = useState(0)

  // console.log("banner",BannerData);
  console.log("image",imageData);

  const handleNext = () =>{ 
    const len = BannerData.length - 1
    setcurrentImage(currentImage=>((currentImage+1)%len))
  }

  const handleprevious = () =>{
    const len = BannerData.length - 1
    setcurrentImage(currentImage=>(currentImage>0?(currentImage-1) : len-1))
  }

  useEffect(() => {
   const interval = setInterval(()=>{
    handleNext()
   },4000)

   return ()=> clearInterval(interval)
    
  },  [BannerData,imageData ,currentImage])
  

  return (
    <section className='w-full h-full'>
      <div className='flex max-h-[95vh] overflow-hidden'>
        {BannerData.map((data, index) => {
          // console.log("data", data);
          return (

            <div key={data.id + "bannerHome" + index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{transform : `translateX(-${currentImage*100}%)`}} >
              <div className='h-full w-full'>
                <img className='h-full w-full object-cover' src={imageData + data?.backdrop_path} />
              </div>

              <div className='absolute top-0 w-full h-full hidden items-center  justify-between px-4 group-hover:lg:flex'>
                <button onClick={handleprevious} className='bg-white  p-1 rounded-full  text-xl z-10 text-black'>
                  <FaAngleLeft /> 
                </button>
                <button onClick={handleNext} className='bg-white p-1 rounded-full  text-xl z-10 text-black '>
                  <FaAngleRight />
                </button>
              </div>

              <div className='absolute h-full w-full top-0 bg-gradient-to-t from-neutral-900 to-transparent'></div>
              {/* console.log(imageData + data.backdrop_path) */}

              <div className='container mx-auto lg:mx-[40px]'>

                <div className=' w-full absolute bottom-0 max-w-lg px-4'>
                  <h2 className='font-bold text-2xl text-white drop-shadow-2xl'>{data.name ? data.name : data.title}</h2>
                  <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                  <div className='flex items-center gap-4'>
                    <p>Rating : {data.vote_average.toFixed(1)}+</p>
                    <span>|</span>
                    <p>Views : {data.popularity.toFixed(1)}</p>
                  </div>
                  <button className='bg-white px-4 py-2 text-black font-bold rounded-md mt-4'>
                    Play Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default bannerHome
