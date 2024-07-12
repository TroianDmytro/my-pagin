import React from 'react';
import { Button } from 'react-bootstrap';
import scales from '../images/scales.png';

const CompareButton = ({ isCompared, handleCompare, item, setShowTable, compareCar }) => {
  const removeFromComparison = () => {
    handleCompare(item);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      {isCompared ? (
        <Button
          style={{color:'black', fontWeight: 'bold', minWidth: '200px'}}
          variant="danger"
          onClick={removeFromComparison}
          className='mt-2'
        >
          Прибрати з порівняння
        </Button>
      ) : (
        <Button
          style={{color:'black', fontWeight: 'bold'}}
          variant="success"
          onClick={() => handleCompare(item)}
          className='mt-2'
        >
          Порівняти
        </Button>
      )}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid gray', marginLeft: '10px', flexShrink: 0 }}>
        <img
          src={scales}
          style={{ width: '20px', height: '20px', flexShrink: 0}}
          onClick={() => setShowTable(compareCar.length === 2)}
          alt="scales"
        />
      </div>
    </div>
  );
};

export default CompareButton;
