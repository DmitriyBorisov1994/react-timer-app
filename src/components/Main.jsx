import React from 'react'
import { Col, Row, Divider } from 'antd';
import Timer from './Timer';
import TimerHandlers from './TimerHandlers';
import TimerSetters from './TimerSetters';

const Main = ({ handleStart, handleStop, handleReset, handleIncrease, handleDecrease, time, isCounting, setTimer }) => {
   return (
      <main className='main'>
         <Row justify='center'>
            <Col xs={24} sm={12} md={6}>
               <TimerSetters setTimer={setTimer} />
               <Divider />
               <Timer handleIncrease={handleIncrease} handleDecrease={handleDecrease} time={time} />
               <Divider />
               <TimerHandlers handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isCounting={isCounting} />
            </Col>
         </Row >
      </main >
   )
}

export default Main