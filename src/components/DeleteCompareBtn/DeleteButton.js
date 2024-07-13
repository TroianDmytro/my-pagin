import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Context from '../../Context';

const DeleteButton = () => {
  const ContextValue = useContext(Context);

  const clearComparison = () => {
    ContextValue.setCompareCar([]);
    localStorage.removeItem('compareCar');
  };

  return (
    <Button variant="success" onClick={clearComparison} className='mt-2' style={{ color: 'black', fontWeight: 'bold', marginRight: '250px', minWidth: '212px' }}>
      Очистити порівняння
    </Button>
  );
};

export default DeleteButton;
