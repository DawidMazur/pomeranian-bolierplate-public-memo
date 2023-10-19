import React, { useState, useEffect } from 'react';
import style from './style.css';

export const JsSlidingBanner = () => {
  const [move, setMove] = useState(0);
  const [start, setStart] = useState(true);

  useEffect(() => {
    if (!start) return;
    const interval = setInterval(() => {
      setMove((prev) => prev - 5);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  });
  const handleMove = () => {
    setStart(!start);
  };

  return (
    <>
      <h1 style={{ transform: `translateX(${move}%)` }}>Banner</h1>
      <button onClick={handleMove}>{start ? 'Stop' : 'Start'}</button>
    </>
  );

  // return <h1 style={{ left: `${move}%)` }}>Banner</h1>;
};
