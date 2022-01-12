import axios from 'axios'
import { useState, useEffect } from 'react'
import ShowEpisodes from './ShowEpisodes';


const ResidentInfo = ({resident}) => {

    
    const [residentInfo, setResidentInfo] = useState({});

    useEffect(() => {
        axios.get(resident)
            .then(res => setResidentInfo(res.data))
    }, [resident])

    

    const getColorStatus = () => {
        if(residentInfo?.status === 'Alive'){
            return <div className='circle green'></div>
        }else if(residentInfo?.status === 'Dead'){
            return <div className='circle red'></div>
        }else{
            return <div className='circle orange'></div>
        }
    }
    

    return (
        <div className='card'>
            <img src={residentInfo?.image} alt="img avatar" className='img-avatar' />
            <div>
                <h4>{residentInfo?.name}</h4>
                <div>
                    {
                      getColorStatus()
                    }
                    <h5>{residentInfo?.status} - {residentInfo?.species}</h5>
                </div>
                <p className='light-brown'>origin</p>
                <p>{residentInfo?.origin?.name}</p>
                <p className='light-brown'>episodes where appear</p>
                <div>
                {
                    residentInfo?.episode?.map( url => (
                        <ShowEpisodes url={url} key={url}/>
                    ))
                }
                </div>
                
            </div>
        </div>
    )
}

export default ResidentInfo
