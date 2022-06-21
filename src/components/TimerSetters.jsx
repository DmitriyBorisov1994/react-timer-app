import React from 'react'
import { Col, Row, Button } from 'antd';

const TimerSetters = ({ setTimer }) => {

   return (
      <Row justify='center' gutter={8}>
         <Col xs={6}>
            <Button block onClick={() => setTimer(2 * 3600)}>Work</Button>
         </Col>
         <Col xs={6}>
            <Button block onClick={() => setTimer(15 * 60)}>Relax</Button>
         </Col>
         <Col xs={6}>
            <Button block onClick={() => setTimer(45 * 60)}>Study</Button>
         </Col>
         <Col xs={6}>
            <Button block onClick={() => setTimer(60 * 60)}>Workout</Button>
         </Col>
      </Row>
   )
}

export default TimerSetters