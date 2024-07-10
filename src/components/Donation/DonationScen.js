import React from 'react';
import { Container, Button } from 'react-bootstrap';
import alarm from '../images/alarm2.jpg'

const DonationScene = () => {
  return (
    <Container className="text-center mt-5">
      <p>Ты достиг лимита поиска в 100 автомобилей за день.</p>
      <p>Донатик закинь, ухилянт</p>
      <h3>↓</h3>
      <Button 
        variant="primary" 
        href="https://bank.gov.ua/ua/about/support-the-armed-forces" 
        target="_blank"
      >
        Задонатить
      </Button>
      <div style={{ marginTop: '20px' }}>
        <img src={alarm} style={{ height: '300px', width: 'auto' }} />
      </div>
    </Container>
  );
};

export default DonationScene;
