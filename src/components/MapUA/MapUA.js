import React, { useState } from 'react';
import { MapUAWrapper } from './MapUA.styled';
import { Alert, Button } from 'react-bootstrap';
import UkraineMap from '../Karta/Karta';



const MapUA = (props) => {
   const [show, setShow] = useState(false);
   const temp = (props.region?.split("-")[0]) ? (props.region?.split("-")[0]) : "#";

   return (
      <MapUAWrapper >
         <Alert show={show} style={{ border: "none", backgroundColor: "yellow" }}>
            <UkraineMap region={temp}/>
            <br />
            <div className="d-flex justify-content-end">
               <Button onClick={() => setShow(false)} variant="dark">
                  Close Map
               </Button>
            </div>
         </Alert>

         {!show && <Button onClick={() => setShow(true)}>Show Map</Button>}

      </MapUAWrapper >
   );
}

MapUA.propTypes = {};

export default MapUA;
