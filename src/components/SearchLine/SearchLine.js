import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axiosData from '../../axiosData';
import React, { useState } from 'react';
import { SearchLineWrapper } from './SearchLine.styled';
import { type } from '@testing-library/user-event/dist/type';

const SearchLine = ({ seter = () => { } }) => {
   const [inputValue, setInputValue] = useState('');
   const [typeSearch, setTypeSearch] = useState('номер');

   const handleSelect = (val) => {
      console.log("val", val.target.value)
      setTypeSearch(val.target.value);
   }

   const handleInputChange = (event) => {
      setInputValue(event.target.value);
   };

   const handleSearch = async () => {
      console.log('Input value:', inputValue);
      console.log("typeSeach",typeSearch);
      const data = await axiosData(inputValue, typeSearch);
      seter(data);
   };

   const styled = {
      fontWeight: "600",
      fontSize: "20px",
      border: "2px solid black"
   };
   const styledSelect = { ...styled, maxWidth: "max-content" };
   
   return (
      <SearchLineWrapper >
         <InputGroup className=" mt-3 mb-3 m-auto" style={{ width: "500px" }} >
            <Form.Control
               style={styled}
               value={inputValue}
               onChange={handleInputChange}
               placeholder={"Введіть " + typeSearch}
               aria-label="KA0007XB"
               aria-describedby="basic-addon2"
            />
            <Form.Select
               aria-label="Default select example"
               style={styledSelect}
               onChange={handleSelect}
            >
               <option value='номер'>Номер</option>
               <option value="vin">Vin</option>
               <option value="модель">Моделі</option>
               <option value="регіон">Регіон</option>
            </Form.Select>
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch} style={styled}>
               Пошук
            </Button>
         </InputGroup>
      </SearchLineWrapper>
   );
}
SearchLine.propTypes = {};
export default SearchLine;