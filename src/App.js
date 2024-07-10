import './App.css';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import SearchLine from './components/SearchLine/SearchLine';
import MapUA from './components/MapUA/MapUA';
import scales from './components/images/scales.png';

function App() {
  const [auto, setAuto] = useState([]);
  const [ typeCard, setTypeCard] = useState("номер");
  // const [search, setSearch] = useState("");
  

  return (
    <div className='App'>
      <SearchLine seterAuto={setAuto} seterTypeCard={setTypeCard} />
      <Pagination listItem={auto} variantCard={typeCard} />
      <MapUA region={auto[0]?.region} />
      
    </div>
  );
}

export default App;