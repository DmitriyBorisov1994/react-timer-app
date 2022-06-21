import React, { useRef } from 'react'
import { Col, Row, Space } from 'antd';
import {
   UpOutlined,
   DownOutlined,
} from '@ant-design/icons';

const styles = {
   fontSize: '2rem',
}

const Timer = ({ handleIncrease, handleDecrease, time }) => {



   return (
      <Row justify='center'>
         <Col xs={4}>
            <div style={styles}>{time.getHours()}</div>
         </Col>
         <Col xs={2}>
            <Space direction='vertical' align='center'>
               <UpOutlined onClick={() => handleIncrease(3600)} />
               <DownOutlined onClick={() => handleDecrease(3600)} />
            </Space>
         </Col>
         <Col xs={3}>
            <div style={styles}>:</div>
         </Col>
         <Col xs={4}>
            <div style={styles}>{time.getMinutes()}</div>
         </Col>
         <Col xs={2}>
            <Space direction='vertical' align='center'>
               <UpOutlined onClick={() => handleIncrease(60)} />
               <DownOutlined onClick={() => handleDecrease(60)} />
            </Space>
         </Col>
         <Col xs={3}>
            <div style={styles}>:</div>
         </Col>
         <Col xs={4}>
            <div style={styles}>{time.getSeconds()}</div>
         </Col>
         <Col xs={2} className='main-time__controls time__controls-seconds'>
            <Space direction='vertical' align='center'>
               <UpOutlined onClick={() => handleIncrease(5)} />
               <DownOutlined onClick={() => handleDecrease(5)} />
            </Space>
         </Col>
      </Row>
   )
}

export default Timer