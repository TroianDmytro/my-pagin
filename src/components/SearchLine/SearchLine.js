import React, { useState } from 'react';
import { SearchLineWrapper } from './SearchLine.styled';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { axiosDataNomer } from '../Pagination/Pagination';

const SearchLine = ({title="Пошук", seter = () => { }, searchFunc = () => { } }) => {
   const [inputValue, setInputValue] = useState('');

   const handleInputChange = (event) => {
      setInputValue(event.target.value);
   };

   const handleSearch = async () => {
      console.log('Input value:', inputValue);
      // Здесь можно добавить логику для поиска по введённому значению
      const data = await searchFunc(inputValue);
      seter(data);
   };

   return (
      <SearchLineWrapper>
         <h3 style={{ textAlign: 'center' }}>{"Пошук по "+title}</h3>
         <InputGroup className=" mt-3 mb-3 m-auto" style={{width:"500px"}} >
            <Form.Control
               style={{ fontWeight: "600", fontSize: "20px", border: "2px solid black" }}
               value={inputValue}
               onChange={handleInputChange}
               placeholder={"Введить "+ title}
               aria-label="KA0007XB"
               aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch} style={{ border: "2px solid black" }}>
               Search
            </Button>
         </InputGroup>
      </SearchLineWrapper>
   );
}

SearchLine.propTypes = {};

export default SearchLine;




