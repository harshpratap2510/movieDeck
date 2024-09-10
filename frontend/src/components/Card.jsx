import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'


const Card = ({data,index, trending,media_type}) => {

 
   
  const imageData = useSelector(state => state.movieData.imageURL)
  
  const mediaType = data.media_type ?? media_type ;
  return (
   <Link to={"/" + mediaType+"/"+data.id}>
    <div className='w-full max-w-[230px] min-w-[230px] rounded h-80 overflow-hidden hover:scale-105 transition-all relative'>

      {
        data?.poster_path ? (  <img className='m-auto' src={imageData+data?.poster_path} alt="" />
        ) :
        (
          <div className='bg-neutral-800 h-full w-full m-auto'>
            <h2>No Image Found</h2>
          </div>
        )
      }
     

      <div className='absolute top-4 '>
      {
        trending && (
            <div className='py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden'>
                #{index} Trending
            </div>
        )
       }
      </div>

      <div className='bottom-0 absolute h-16 bg-black/60 backdrop-blur-3xl w-full p-2'>
        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold '>{data.title ? data.title : data.name}</h2>
        <div className='text-sm text-neutral-400'>
          <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
        </div>
      </div>
    </div>
    
    </Link>
  )
}

export default Card
