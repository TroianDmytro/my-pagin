import React from 'react';
// import PropTypes from 'prop-types';
import { PaginationWrapper } from './Pagination.styled';
import P from 'react-pagimagic';
import axios from 'axios';
import { Button, Card, ListGroup } from 'react-bootstrap';

// XTA210990X2412023

const axiosData = async (url) => {

   const key = "b58b989505dc6b035c5ee1739a12f057";
   try {
      const response = await axios.get(url, {
         headers: {
            "Accept": "application/json",
            "X-Api-Key": key,
         },
      });
      const data = response.data;
      ///////////////////////////////////////////////////////
      data.operations = data.operations.map(item => item = { ...item, digits: data.digits });
      data.operations[0] = ({ ...data.operations[0], vin: data.vin });
      data.operations[0] = ({ ...data.operations[0], photo_url: data.photo_url });
      return data.operations // Возвращаем данные

   } catch (error) {
      console.error("Error fetching data: ", error);
      return null; // В случае ошибки возвращаем null
   }
}

export const axiosDataNomer = async (item) => {
   const url = `https://baza-gai.com.ua/nomer/${item.toUpperCase()}`;
   return await axiosData(url);
};

export const axiosDataVin = async (item) => {
   const url = `https://baza-gai.com.ua/vin/${item.toUpperCase()}`;
   return await axiosData(url);
};


const Pagination = (props) => {
   const renderChildren = list => {
      return list.map((item, index) => {

         const styled = {
            display: "flex",
            alignItem: "start",
         }
         return (item &&
            <Card key={index} style={{ width: '30rem', fontWeight: "600", fontSize: "20px" }} className='border border-2 border-success mb-2'>
               <Card.Img variant="top" src={item.photo_url} />
               <Card.Body>
                  <Card.Title>{item.vendor} {item.model}</Card.Title>
                  <Card.Text style={{ textAlign: "start" }}>
                     <ListGroup variant="flush" >
                        <ListGroup.Item>Номер: {item.digits||"----------"}</ListGroup.Item>
                        <ListGroup.Item>VIN: {item.vin || "**************"}</ListGroup.Item>
                        {/* {item.is_stolen && <ListGroup.Item>В розшуку: {item.is_stolen ? "Так" : "Ні"}</ListGroup.Item> } */}
                        <ListGroup.Item>Реестрація: {item.address} </ListGroup.Item>
                        <ListGroup.Item>Дата реестрації: {item.registered_at} </ListGroup.Item>
                        <ListGroup.Item>Операція: {item.operation.ua}</ListGroup.Item>
                        <ListGroup.Item>Тип: {item.kind.ua}</ListGroup.Item>
                        <ListGroup.Item>Рік випуску: {item.model_year}</ListGroup.Item>
                        <ListGroup.Item>Колір: {item.color.ua} </ListGroup.Item>
                        <ListGroup.Item>Вид палива: {item.fuel.ua}</ListGroup.Item>
                        <ListGroup.Item>Об'ем двигуна: {item.displacement}</ListGroup.Item>
                        <ListGroup.Item>Вага без навантаження: {item.own_weight}</ListGroup.Item>
                        <ListGroup.Item>Максимальна вага: {item.total_weight}</ListGroup.Item>
                     </ListGroup>
                  </Card.Text>
               </Card.Body>
            </Card>
         );
      });
   };
   const CURRENT_PAGE_INDEX = 0;

   return (
      <PaginationWrapper>
         <div style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>
            <P
               list={props.listItem}
               itemsPerPage={1}
               currentPageIndex={CURRENT_PAGE_INDEX}
               className="your-class-if-its-necessary"
               maximumVisiblePaginators={3}
               renderChildren={renderChildren}
               useDefaultStyles
               showCounter
            />
         </div>
      </PaginationWrapper>
   );

}


Pagination.propTypes = {};


export default Pagination;
