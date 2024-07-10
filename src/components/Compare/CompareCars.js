import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CompareCars = ({ compareCar, setShowTable }) => {
  return (
    <div className="comparison-table">
      <table className="table table-bordered" style={{ border: '2px solid', borderImage: 'linear-gradient(to bottom right, skyblue, yellow) 1' }}>
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
            <td>{compareCar[0].vendor}</td>
            <td>{compareCar[1].vendor}</td>
          </tr>
          <tr>
            <td>Модель</td>
            <td>{compareCar[0].model}</td>
            <td>{compareCar[1].model}</td>
          </tr>
          <tr>
            <td>Рік</td>
            <td>{compareCar[0].model_year}</td>
            <td>{compareCar[1].model_year}</td>
          </tr>
          <tr>
            <td>Колір</td>
            <td>{compareCar[0].color.ua}</td>
            <td>{compareCar[1].color.ua}</td>
          </tr>
          <tr>
            <td>Тип палива</td>
            <td>{compareCar[0].fuel.ua}</td>
            <td>{compareCar[1].fuel.ua}</td>
          </tr>
          <tr>
            <td>Тип операції</td>
            <td>{compareCar[0].operation.ua}</td>
            <td>{compareCar[1].operation.ua}</td>
          </tr>
          <tr>
            <td>Дата реєстрації</td>
            <td>{compareCar[0].registered_at}</td>
            <td>{compareCar[1].registered_at}</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={() => setShowTable(false)} style={{ marginLeft:' 620px' }}>Назад</button>
    </div>
  );
}

export default CompareCars;

