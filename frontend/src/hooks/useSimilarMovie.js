import axios from "axios";
import { useEffect, useState } from "react";

const useSimilarMovie = (endpoint)=>{
    const [data,setdata] = useState();
    const [loading, setloading] = useState(false)

    const fetchDetail = async()=>{
        try {
            setloading(true);
            const response = await axios.get(endpoint)
            setloading(false)
            setdata(response.results)
        } catch (error) {
            console.log('error',error)
        }
    }

    useEffect(() => {
     fetchDetail()
    }, [])
    
    return {data,loading}
}

export default useSimilarMovie ;