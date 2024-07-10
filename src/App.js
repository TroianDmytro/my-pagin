import './App.css';
import Pagination, { axiosDataNomer, axiosDataVin } from './components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import SearchLine from './components/SearchLine/SearchLine';
import MapUA from './components/MapUA/MapUA';
import CompareCars from './components/Compare/CompareCars';
import DonationScene from './components/Donation/DonationScen';
import scales from './components/images/scales.png'; 

const SEARCH_LIMIT = 5;  //проверка P.S. работает
// const SEARCH_LIMIT = 100;

function App() {
  const [auto, setAuto] = useState([]);
  const [compareCar, setCompareCar] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [donationScene, setDonationScene] = useState(false);

  useEffect(() => {
    const storedSearchCount = localStorage.getItem('searchCount');
    const storedDonationScene = localStorage.getItem('donationScene');
    const storedDate = localStorage.getItem('date');
    const today = new Date().toISOString().split('T')[0];

    if (storedDate !== today) {
      localStorage.setItem('date', today);
      localStorage.setItem('searchCount', 0);
      localStorage.setItem('donationScene', false);
      setSearchCount(0);
      setDonationScene(false);
    } else {
      setSearchCount(parseInt(storedSearchCount, 10) || 0);
      setDonationScene(storedDonationScene === 'true');
    }
  }, []);

  const incrementSearchCount = () => {
    const newSearchCount = searchCount + 1;
    setSearchCount(newSearchCount);
    localStorage.setItem('searchCount', newSearchCount);

    if (newSearchCount >= SEARCH_LIMIT) {
      setDonationScene(true);
      localStorage.setItem('donationScene', true);
    }
  };

  const handleCompare = (item) => {
    let newCompare = compareCar.slice();
    if (newCompare.includes(item)) {
      newCompare = newCompare.filter(car => car !== item);
    } else if (newCompare.length < 2) {
      newCompare.push(item);
    }
    setCompareCar(newCompare);
  };

  const handleSearch = async (searchFunc, query) => {
    if (searchCount >= SEARCH_LIMIT) {
      setDonationScene(true);
      localStorage.setItem('donationScene', true);
      return;
    }
    setCompareCar([]);
    const data = await searchFunc(query);
    setAuto(data);
    incrementSearchCount();
  };

  return (
    <>
      {donationScene ? (
        <DonationScene />
      ) : (
        <>
          <div style={{position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', border: '1px solid black', backgroundColor: 'white'}} onClick={() => setShowTable(compareCar.length === 2)}>
            <img src={scales} style={{width: '20px', height: '20px'}}/>
          </div>
          <SearchLine title={"номеру"} seter={(query) => handleSearch(axiosDataNomer, query)} searchFunc={axiosDataNomer} />
          <SearchLine title={"VIN"} seter={(query) => handleSearch(axiosDataVin, query)} searchFunc={axiosDataVin} />
          {showTable && compareCar.length === 2 ? (
            <CompareCars compareCar={compareCar} setShowTable={setShowTable} />
          ) : (
            <Pagination listItem={auto} handleCompare={handleCompare} compareCar={compareCar} setShowTable={setShowTable} />
          )}
          <MapUA region={auto[0]?.region} />
        </>
      )}
    </>
  );
}

export default App;
