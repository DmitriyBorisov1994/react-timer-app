import React from 'react'
import { Col, Row, Divider, Progress } from 'antd';
import Timer from './Timer';
import TimerHandlers from './TimerHandlers';
import TimerSetters from './TimerSetters';

const Main = ({ handleStart, handleStop, handleReset, handleIncrease, handleDecrease, time, isCounting, setTimer, timeStarted, timeLeft }) => {
   return (
      <main className='main'>
         <Row justify='center'>
            <Col xs={24} sm={12} md={6}>
               <TimerSetters setTimer={setTimer} />
               <Divider />
               <Timer handleIncrease={handleIncrease} handleDecrease={handleDecrease} time={time} />
               <Row justify='center' style={{ marginTop: '1rem' }}>
                  <Progress
                     strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                     }}

                     type="circle" percent={Math.floor((1 - timeLeft / timeStarted) * 100)} />
               </Row>
               <Divider />
               <TimerHandlers handleStart={handleStart} handleStop={handleStop} handleReset={handleReset} isCounting={isCounting} />
            </Col>
         </Row >
      </main >
   )
}

export default Main