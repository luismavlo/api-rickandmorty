import axios from 'axios';
import { useState } from 'react'

const SearchBox = ({setLocation}) => {
    const [input, setInput] = useState('');
    const [nameLocations, setNameLocations] = useState([]);
    

    const handleInputChange = ({target}) => {
        setInput(target.value);
        axios.get(`https://rickandmortyapi.com/api/location/?name=${target.value}`)
                .then(res => setNameLocations(res.data.results))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLocation( input )
        setInput('');
        setNameLocations([]);
    }


    const handleClick = (e ,nameLocation) =>{
    
        setLocation(nameLocation);
        setNameLocations([]);
    }

    return (
        <section className='search' onSubmit={handleSubmit}>
            <form action="">
                <div>
                    <input type="text" placeholder='Type a location id' value={input} onChange={handleInputChange} />
                </div>
                <button>Search</button>
            </form>
            <div className='search-list'>
                {
                   nameLocations.map( nameLocation => (
                       <div key={nameLocation.id} className='search-item' onClick={(e) => handleClick(e,nameLocation.id)}>
                           {nameLocation.name}
                       </div>
                   )) 
                }
            </div>
        </section>
    )
}

export default SearchBox
