import React from 'react'
import { Col, Row } from 'antd';

const Header = () => {
   return (
      <header className='header'>
         <Row justify='center'>
            <Col xs={24} sm={12} md={6}>
               <h1>Timer App</h1>
            </Col>
         </Row>
      </header>

   )
}

export default Header