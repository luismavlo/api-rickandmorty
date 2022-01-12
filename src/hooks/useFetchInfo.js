import { useState, useEffect } from "react"
import { getInfo } from "../helpers/getInfo";

const useFetchInfo = ( location ) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    

    useEffect(() => {
            getInfo( location )
                .then( info => {   
                        setstate({
                            data: info,
                            loading: false
                        });
                })
    }, [location])

    return state
}

export default useFetchInfo