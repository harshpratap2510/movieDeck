import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetail from '../hooks/useFetchDetails'
import useFetch from '../hooks/useFetch'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../components/Divider'
import HorizontalScrollCard from '../components/horizontalScrollCard'
import useSimilarMovie from '../hooks/useSimilarMovie'

const DetailPage = () => {
  const params = useParams()
  const imageData = useSelector(state => state.movieData.imageURL)

  const { data } = useFetchDetail(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetail(`/${params?.explore}/${params?.id}/credits`)
  const {data : similarMovieData} = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data : recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)

  const writer = castData?.crew?.filter(el => el?.job === "Writer")?.map(el => el?.name)?.join(", ")


  console.log("data", data)
  console.log("star cast", castData)
  console.log("similar", similarMovieData)

  return (
    <div>

      <div className='w-full h-[280px] relative hidden lg:block md:block'>
        <div className='w-full h-full'>
          <img src={imageData + data?.backdrop_path} alt=""
            className=' w-full h-full object-cover' />
        </div>
        <div className='absolute w-full top-0 h-full bg-gradient-to-b from-neutral-900/80 to-transparent'></div>
      </div>

      <div className='container mx-auto px-3 lg:px-16 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='lg:-mt-28 md:-mt-28 relative mx-auto lg:mx-0 w-fit min-w-60'>
          <img src={imageData + data?.poster_path} alt=""
            className=' w-60 h-80 object-cover rounded ' />
        </div>

        <div >
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400'>{data?.tagline}</p>

          <Divider />
          <div className='flex items-center my-3 gap-3'>
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+ </p>
            <span>|</span>
            <p>Views : {Number(data?.vote_count)} </p>
            <span>|</span>
            <p>Duration : {(Number(data?.runtime) / 60).toFixed(0)}h {Number(data?.runtime) % 60}min </p>

          </div>

          <Divider />
          <div>
            <h3 className='xl font-bold text-white'>Overview</h3>
            <p>{data?.overview} </p>
          </div>

          <div className='flex gap-3 items-center my-3 text-center'>
            <p>
              Status: {data?.status}
            </p>
            <span>|</span>
            <p>Release Date: {moment(data?.release_date).format("MMMM Do YYYY")}</p>
          </div>
          <Divider />

          <div>
          <p><span className='text-white'>Director :</span> {castData?.crew[0]?.name} </p>
          <Divider />
          <p>
            <span className='text-white'>Writer : {writer}</span>
          </p>
        </div>

        <Divider />

        <h2 className='font-bold text-lg '>Cast :</h2>
        <div className='grid grid-cols-[repeat(auto-fit,96px)] justify-center gap-8 my-4'>
        {
            castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
              return (
                <div>
                  <div>
                    <img
                      src={imageData + starCast?.profile_path}
                      className='w-24 h-24 object-cover rounded-full'
                    />
                  </div>
                  <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                </div>
              )
            })
          }
        </div> 
       




        </div>

     
    </div>

      <div>
        <HorizontalScrollCard data={similarMovieData} heading={`Similar ${params?.explore}` } media_type= {params?.explore} />
        <HorizontalScrollCard data={recommendationData} heading={"Recommendation "+params?.explore} media_type={params?.explore}/>
      </div>

    </div >
  )
}

export default DetailPage
