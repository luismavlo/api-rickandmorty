import { useState } from 'react'
import { useFetchResidents } from '../hooks/useFetchResidents';
import ResidentInfo from './ResidentInfo';


const ResidentsList = ({location}) => {

    

    const {data, loading} = useFetchResidents(location);
    const [currentPage, setCurrentPage] = useState(0);

    const filteredResidents = () => {
         return data.slice(currentPage, currentPage+8);
    }

    const nextPage = () =>{
            if( data.length > currentPage + 8) 
                setCurrentPage(currentPage+8);
    }

    const prevPage = () =>{
        if( currentPage > 0 )
            setCurrentPage(currentPage - 8);
    }
    
    return (
        <> 
            <h2>Residents</h2>
            {
                loading ? (
                    <div className="loader"></div>
                ) : (
                    <>
                        <div className='cards-container' >
                            {
                                filteredResidents().map(resident => (
                                    <ResidentInfo resident={resident} key={resident} />
                                ))
                            }
                        </div>
                        <div className='btn-group'>
                            <button className='next' onClick={prevPage}>
                                Anteriores
                            </button>
                            &nbsp;
                            <button className='next' onClick={nextPage}>
                                Siguientes
                            </button>
                        </div>
                    </>
                )
            }          
        </>
    )
}

export default ResidentsList
