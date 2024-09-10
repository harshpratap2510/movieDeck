import axios from "axios"
import { useState,useEffect } from "react"

const useFetch = ((endpoint)=> {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)

    const fetch = async()=> {
        try {
            setloading(true);
            const response = await axios.get(endpoint);
            setloading(false)
            setdata(response.data.results) ;
        } catch (error) {
            console.log('error',error);
        }
    }

    useEffect(() => {
      fetch(); 
    }, [])
    
    return {data ,loading} ;
})

export default useFetch