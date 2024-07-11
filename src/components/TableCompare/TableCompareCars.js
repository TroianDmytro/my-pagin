import React,{useContext}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Context from '../../Context';

const TableCompareCars = () => {

  //всі useState з App.js
  const myValue = useContext(Context);
  const Cars = myValue.compareCar;

  const styledTable = {
    border: '2px solid',
    borderImage: 'linear-gradient(to bottom right, skyblue, yellow) 1',
    fontSize: '20px',
    fontWeight: '700',
    fontFamily:"sans-serif"
  }

  console.log("Cars",Cars);
  return (
    <div className="comparison-table" >
      <table className="table table-bordered" style={styledTable}>
        <thead>
          <tr >
            <th style={{minWidth:"200px"}}>Характеристики</th>
            <th style={{minWidth:"300px"}}>Авто 1</th>
            <th style={{minWidth:"300px"}}>Авто 2</th>
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
          {/* ////////////////// */}
          <tr>
            <td>Орган що видав</td>
            <td>{Cars[0].department}</td>
            <td>{Cars[1].department}</td>
          </tr>
          <tr>
            <td>Регіон</td>
            <td>{Cars[0].address}</td>
            <td>{Cars[1].address}</td>
          </tr>
          <tr>
            <td>Тип</td>
            <td>{Cars[0].kind.ua}</td>
            <td>{Cars[1].kind.ua}</td>
          </tr>
          <tr>
            <td>Вага без навантаження, кг</td>
            <td>{Cars[0].own_weight}</td>
            <td>{Cars[1].own_weight}</td>
          </tr>
          <tr>
            <td>Повна маса, кг</td>
            <td>{Cars[0].total_weight}</td>
            <td>{Cars[1].total_weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCompareCars;

