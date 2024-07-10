import React,{useContext}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from '../../Context';

const TableCompareCars = () => {

  //всі useState з App.js
  const myValue = useContext(Context);
  const Cars = myValue.compareCar;

  const styledTable = {
    border: '2px solid',
    borderImage: 'linear-gradient(to bottom right, skyblue, yellow) 1'
  }


  return (
    <div className="comparison-table" >
      <table className="table table-bordered" style={styledTable}>
        <thead>
          <tr>
            <th>Характеристики</th>
            <th>Авто 1</th>
            <th>Авто 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Виробник</td>
            <td>{Cars[0].vendor}</td>
            <td>{Cars[1].vendor}</td>
          </tr>
          <tr>
            <td>Модель</td>
            <td>{Cars[0].model}</td>
            <td>{Cars[1].model}</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>{Cars[0].model_year}</td>
            <td>{Cars[1].model_year}</td>
          </tr>
          <tr>
            <td>Колір</td>
            <td>{Cars[0].color.ua}</td>
            <td>{Cars[1].color.ua}</td>
          </tr>
          <tr>
            <td>Тип палива</td>
            <td>{Cars[0].fuel.ua}</td>
            <td>{Cars[1].fuel.ua}</td>
          </tr>
          <tr>
            <td>Тип операції</td>
            <td>{Cars[0].operation.ua}</td>
            <td>{Cars[1].operation.ua}</td>
          </tr>
          <tr>
            <td>Дата реєстрації</td>
            <td>{Cars[0].registered_at}</td>
            <td>{Cars[1].registered_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCompareCars;

