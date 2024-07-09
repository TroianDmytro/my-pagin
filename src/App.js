import './App.css';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import SearchLine from './components/SearchLine/SearchLine';
import MapUA from './components/MapUA/MapUA';
import axiosData from './axiosData';

function App() {
  const [auto, setAuto] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchLine seter={setAuto} />
      {/* <SearchLine seter={setAuto} searchFunc={axiosDataVin}/> */}
      <Pagination listItem={auto} />
      <MapUA region={auto[0]?.region} />
    </>
  );
}
export default App;