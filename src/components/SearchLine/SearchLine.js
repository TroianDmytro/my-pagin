import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axiosData from '../../axiosData';
import React, { useState } from 'react';
import { SearchLineWrapper } from './SearchLine.styled';

const SearchLine = ({ seterAuto = () => { }, seterTypeCard = () => { }, handleSearch }) => {
  const [inputValue, setInputValue] = useState('');
  const [typeSearch, setTypeSearch] = useState('номер');

  const handleSelect = (val) => {
    setTypeSearch(val.target.value);
    seterTypeCard(val.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = async () => {
    await handleSearch(inputValue, typeSearch);
  };

  const styled = {
    fontFamily: "Arial",
    fontWeight: "700",
    fontSize: "20px",
    border: "2px solid black",
    backgroundColor: "yellow"
  };
  const styledSelect = { ...styled, maxWidth: "max-content" };

  return (
    <SearchLineWrapper >
      <InputGroup className=" pt-3 mb-3 m-auto" style={{ width: "500px" }} >
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
        <Button variant="light" id="button-addon2" onClick={handleSearchClick} style={{ ...styled }}>
          Пошук
        </Button>
      </InputGroup>
    </SearchLineWrapper>
  );
};

export default SearchLine;
