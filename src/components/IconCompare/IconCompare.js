import React, { useContext } from 'react';
import { IconCompareWrapper } from './IconCompare.styled';
import scales from '../images/scales.png';
import Context from '../../Context';


const IconCompare = () => {

   //всі useState з App.js
   const myValue = useContext(Context);

   const handleClick = (show)=>{
      console.log("show",show);
      myValue.setShowTable(myValue.compareCar.length === 2 && !show);
   }

   return (<IconCompareWrapper onClick={()=>handleClick(myValue.showTable)} >
      <img
         src={scales}
         alt="scales"
         style={{
            width: '20px',
            height: '20px'

         }}
      />
   </IconCompareWrapper>
   );
}


IconCompare.propTypes = {};

export default IconCompare;
