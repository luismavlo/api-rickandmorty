import LocationInfo from './components/LocationInfo';
import SearchBox from './components/SearchBox';
import ResidentsList from './components/ResidentsList';
import { useState } from 'react';


const random = String(Math.floor(Math.random() * 126) + 1);

function App() {

  const [location, setLocation] = useState(random);

  
  return (
    <>
      <header></header>
      <div className='content'>
        <SearchBox setLocation={setLocation}/>
        <LocationInfo location={location}/>
        <ResidentsList location={location}/>
      </div>
    </>
  );
}

export default App;
