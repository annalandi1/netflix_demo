import React from 'react';
import { Container } from 'react-bootstrap';

 const FooterComponent = function () {
  return (
    <div className='text-center text-white' style={{ backgroundColor: '#1a1a19' }}>
      <Container className='p-4'></Container>

      <div className='text-center p-3' style={{ backgroundColor: '#1a1a19' }}>
        © 2024 Copyright:
          Netflix
        
      </div>
    </div>
  );
}

export default FooterComponent