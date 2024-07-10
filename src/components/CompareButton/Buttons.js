import React from 'react';
import { Button } from 'react-bootstrap';
// import styled from 'styled-components';

const CompareButton = ({ isCompared, handleCompare, item}) => {
  const removeFromComparison = () => {
    handleCompare(item);
  };

  // стиль кнопки додати в порiвняння
  const styledBtn = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px'
  };
 

  return (
    <div style={styledBtn}>
      {isCompared ? (
        <Button
          variant="danger"
          onClick={removeFromComparison}
          className='mt-2'
        >
          Прибрати з порівняння
        </Button>
      ) : (
        <Button
          variant="success"
          onClick={() => handleCompare(item)}
          className='mt-2'
        >
          Додати в порівняти
        </Button>
      )}
      
    </div>
  );
};

export default CompareButton;
