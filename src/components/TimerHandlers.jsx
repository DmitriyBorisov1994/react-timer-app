import React from 'react'
import { Col, Row, Button } from 'antd';

const TimerHandlers = ({ handleStop, handleStart, handleReset, isCounting }) => {
   return (
      <Row justify='center' gutter={8}>
         <Col xs={6}>
            {isCounting
               ? <Button block onClick={handleStop}>Stop</Button>
               : <Button block onClick={handleStart}>Start</Button>}
         </Col>
         <Col xs={6}>
            <Button block onClick={handleReset}>Reset</Button>
         </Col>
      </Row>
   )
}

export default TimerHandlers