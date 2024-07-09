import React, { useState } from 'react';
import { MapUAWrapper } from './MapUA.styled';
import { Alert, Button } from 'react-bootstrap';
import UkraineMap from '../Karta/Karta';



const MapUA = (props) => {
   const [show, setShow] = useState(false);
   const temp = (props.region?.split("-")[0]) ? (props.region?.split("-")[0]) : "#";

   const styled = {
      width: "31rem",
      marginTop:"-25rem",
      marginLeft:"1em",
      border: "none",
      backgroundColor: "yellow",
   }

   const styledButtom={
      backgroundColor:"darkviolet",
      color:'black',
      fontSize:"20px",
      fontWeight:"700",
      position: "fixed",
      bottom: "0",
      left: "0",
      margin: "2em"
   }
   return (
      <MapUAWrapper >
         <Alert show={show} style={styled}>
            <UkraineMap region={temp} />
            <br />
            <div className="d-flex justify-content-end" >
               <Button onClick={() => setShow(false)} variant="dark" >
                  Згорнути карту
               </Button>
            </div>
         </Alert>

         {!show && <Button onClick={() => setShow(true)} style={styledButtom}>Показати карту</Button>}

      </MapUAWrapper >
   );
}

MapUA.propTypes = {};

export default MapUA;
