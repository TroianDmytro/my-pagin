import './App.css';
import Pagination from './components/Pagination/Pagination';
import { useState, useEffect } from 'react';
import SearchLine from './components/SearchLine/SearchLine';
import MapUA from './components/MapUA/MapUA';

import DonationScene from './components/Donation/DonationScen';
import axiosData from './axiosData';
import IconCompare from './components/IconCompare/IconCompare';
import Context from './Context';
import AlertTableCompareCars from './components/AlertTableCompareCars/AlertTableCompareCars';

// const SEARCH_LIMIT = 3; //проверка 
const SEARCH_LIMIT = 20; 
const RESET_TIME = '00:00'; 


function App() {
  //масив обьектів який повертается з серверу
  const [auto, setAuto] = useState([]);

  const [searchCount, setSearchCount] = useState(0);
  const [donationScene, setDonationScene] = useState(false);
 //тип картки яка буде видображатись(залежить від вибору в select)
  const [typeCard, setTypeCard] = useState("номер");
  //показувати таблицю порівняння чи ні
  const [showTable, setShowTable] = useState(false);
  // TODO
  const [compareCar, setCompareCar] = useState([]);

  

  useEffect(() => {
    const storedSearchCount = parseInt(localStorage.getItem('searchCount')) || 0;
    const storedDonationScene = localStorage.getItem('donationScene') === 'true';
    const storedDate = localStorage.getItem('date');
    const today = new Date().toISOString().split('T')[0];

    if (storedDate !== today) {
      localStorage.setItem('date', today);
      localStorage.setItem('searchCount', '0');
      localStorage.setItem('donationScene', 'false');
      setSearchCount(0);
      setDonationScene(false);
    } else {
      setSearchCount(storedSearchCount);
      setDonationScene(storedDonationScene);
    }

    if (storedSearchCount >= SEARCH_LIMIT) {
      setDonationScene(true);
    }
  }, []);

  const incrementSearchCount = () => {
    const newSearchCount = searchCount + 1;
    setSearchCount(newSearchCount);
    localStorage.setItem('searchCount', newSearchCount.toString());

    if (newSearchCount >= SEARCH_LIMIT) {
      setDonationScene(true);
      localStorage.setItem('donationScene', 'true');
    }
  };

  const checkAndResetSearchCount = () => {
    const now = new Date();
    const resetTime = new Date();
    resetTime.setHours(parseInt(RESET_TIME.split(':')[0]), parseInt(RESET_TIME.split(':')[1]), 0, 0);

    if (now >= resetTime) {
      const storedDate = localStorage.getItem('date');
      const today = new Date().toISOString().split('T')[0];
      
      if (storedDate !== today) {
        localStorage.setItem('date', today);
        setSearchCount(0);
        localStorage.setItem('searchCount', '0');
        setDonationScene(false);
        localStorage.setItem('donationScene', 'false');
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(checkAndResetSearchCount, 60000);
    checkAndResetSearchCount(); 

    return () => clearInterval(interval);
  }, []);

  const handleSearch = async (query, typeOperation) => {
    try {
      const data = await axiosData(query, typeOperation);
      setAuto(data);
      incrementSearchCount(); 
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error);
    }
  };


  //Об'ект який передается в useContext
  const myValue = {
    auto,
    setAuto,
    typeCard,
    setTypeCard,
    showTable,
    setShowTable,
    compareCar,
    setCompareCar,
    handleSearch
  }
  return (
    <div className='App'>
      {donationScene ? (
        <DonationScene />
      ) : (
        <>
         <Context.Provider value={myValue}>
          <IconCompare />
          <SearchLine />
          <AlertTableCompareCars />
          <Pagination />
          <MapUA region={auto[0]?.region} />
        </Context.Provider>
        </>
      )}
    </div>
  );
}

export default App;
