import React, { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(!start);
  };
  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, [start, time]);
  const handleRestart = () => {
    setTime(0);
    setStart(0);
  };

  return (
    <>
      <h1>Timer: {time} sec</h1>
      <button onClick={handleStart}>{start ? 'Stop' : 'Start'}</button>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
};
