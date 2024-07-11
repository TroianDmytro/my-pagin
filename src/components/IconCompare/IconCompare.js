import React, { useContext } from 'react';
import { IconCompareStyle, IconCompareWrapper } from './IconCompare.styled';
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
      <IconCompareStyle
         src={scales}
         alt="scales"
      />
   </IconCompareWrapper>
   );
}


IconCompare.propTypes = {};

export default IconCompare;
