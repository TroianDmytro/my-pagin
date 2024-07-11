import './App.css';
import Pagination from './components/Pagination/Pagination';
import { useState } from 'react';
import SearchLine from './components/SearchLine/SearchLine';
import MapUA from './components/MapUA/MapUA';
import TableCompareCars from './components/TableCompare/TableCompareCars';
import IconCompare from './components/IconCompare/IconCompare';
import { Alert } from 'react-bootstrap';
import Context from './Context';

function App() {
  //масив обьектів який повертается з серверу
  const [auto, setAuto] = useState([]);
  //тип картки яка буде видображатись(залежить від вибору в select)
  const [typeCard, setTypeCard] = useState("номер");
  //показувати таблицю порівняння чи ні
  const [showTable, setShowTable] = useState(false);
  // TODO
  const [compareCar, setCompareCar] = useState([]);

  //Об'ект який передается в useContext
  const myValue = {
    auto,
    setAuto,
    typeCard,
    setTypeCard,
    showTable,
    setShowTable,
    compareCar,
    setCompareCar
  }

  return (
    <div className='App'>
      <Context.Provider value={myValue}>
        <IconCompare />
        <SearchLine />
        <Alert show={showTable} variant='primary'
          style={{
            position: 'absolute',
            zIndex: "100",
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
          <TableCompareCars />
        </Alert>
        <Pagination />
        <MapUA region={auto[0]?.region} />
      </Context.Provider>
    </div>
  );
}

export default App;