import axios from "axios"
import { useEffect, useState } from "react"

 const useApphook=()=>{

    const [appData, setAppData]=useState([])
    const [loading, setloading]=useState(true)
    const [error, setError]=useState(null)
    
    useEffect(()=>{
        setloading(true)
        axios('./appData.json')
        .then(data=> setAppData(data.data))
        .catch(err=> setError(err))
        .finally(()=> setloading(false))
    },[])
    return {appData, loading, error}
 }

 export default useApphook