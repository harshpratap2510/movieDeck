import React from 'react'
import {IoClose} from "react-icons/io5"
import useFetchDetail from '../hooks/useFetchDetails'
const videoPlay = ({data,close,media_type}) => {
const {data: videoData} = useFetchDetail(`/${media_type}/${data?.id}/videos`)

  return (
    <div>
      <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'>
        <div className='bg-black w-full max-h-[80vh] max-w-screen-lg relative aspect-video rounded  '>
           
            <button onClick={close} className='absolute -right-1 -top-7 text-3xl z-60'>
            <IoClose/>
            </button>
            <iframe src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`} 
            className='w-full h-full'
            /> 
        </div>
      </section>
    </div>
  )
}

export default videoPlay
