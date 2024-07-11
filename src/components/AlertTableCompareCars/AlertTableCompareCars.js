import React,{useContext}from 'react';
import { AlertTableCompareCarsWrapper } from './AlertTableCompareCars.styled';
import { Alert } from 'react-bootstrap';
import Context from '../../Context';
import TableCompareCars from '../TableCompare/TableCompareCars';

const AlertTableCompareCars = () => {
   const ContextValueApp = useContext(Context);

   const styled = {
      position: 'absolute',
      zIndex: "100",
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
   }

   return (
      <AlertTableCompareCarsWrapper>
         <Alert show={ContextValueApp.showTable} variant='primary'
            style={styled}>
            <TableCompareCars />
         </Alert>
      </AlertTableCompareCarsWrapper>
   );
}

AlertTableCompareCars.propTypes = {};

AlertTableCompareCars.defaultProps = {};

export default AlertTableCompareCars;
