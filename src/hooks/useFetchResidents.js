import { useState, useEffect } from "react"
import { getResidents } from "../helpers/getResidents";

export const useFetchResidents = (location) => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getResidents( location )
            .then( resident => {   
                    setstate({
                        data: resident,
                        loading: false
                    });
            })
    }, [location])
    
    return state
}

