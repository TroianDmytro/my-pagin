import './App.css';
import Pagination, { axiosDataNomer, axiosDataVin } from './components/Pagination/Pagination';
import { useState } from 'react';
import SearchLine from './components/SearchLine/SearchLine';

function App() {
  const [auto, setAuto] = useState([]);
  const [search,setSearch]= useState("");

  return (
    <>
      <SearchLine title={"номеру"} seter={setAuto} searchFunc={axiosDataNomer}/>
      <SearchLine title={"VIN"} seter={setAuto} searchFunc={axiosDataVin}/>
      <Pagination listItem={auto} />
    </>
  );
}

export default App;
