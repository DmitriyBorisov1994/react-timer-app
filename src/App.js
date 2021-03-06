import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { TimeHandler } from './utils/TimeHandler'

function App() {

  const [timeLeft, setTimeLeft] = useState(5 * 60)
  const [isCounting, setIsCounting] = useState(false)
  const [timeStarted, setTimeStarted] = useState(timeLeft)

  const time = new TimeHandler(timeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        time.setTime(timeLeft)
      }
    }, 1000);
    if (timeLeft === 0) setIsCounting(false)
    return () => clearInterval(interval)
  }, [timeLeft, isCounting])


  const handleStop = () => {
    setIsCounting(false)
  }
  const handleStart = () => {
    setIsCounting(true)
  }
  const handleReset = () => {
    setIsCounting(false)
    setTimeLeft(5 * 60)
    setTimeStarted(5 * 60)
  }

  const handleIncrease = (timeValue) => {
    setTimeLeft((prev) => {
      if (prev + timeValue > 24 * 3600) {
        setTimeStarted(24 * 3600)
        return 24 * 3600
      }
      setTimeStarted(prev + timeValue)
      return prev + timeValue
    })
  }
  const handleDecrease = (timeValue) => {
    setTimeLeft((prev) => {
      if ((prev - timeValue) >= 0) {
        setTimeStarted(prev - timeValue)
        return prev - timeValue
      }
      setTimeStarted(0)
      return 0
    })

  }

  const setTimer = (timeValue) => {
    setTimeLeft(timeValue)
    setTimeStarted(timeValue)
  }

  return (
    <div className="App">
      <Header />
      <Main
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        time={time}
        isCounting={isCounting}
        setTimer={setTimer}
        timeStarted={timeStarted}
        timeLeft={timeLeft}
      />
    </div>
  );
}

export default App;
