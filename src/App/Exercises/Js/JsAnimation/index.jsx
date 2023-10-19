import React, { useState, useEffect } from 'react';
import style from './style.css';

const Animation = ({ animationDuration }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration(duration);
    }, duration);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div
        className="square"
        style={{ animationDuration: `${duration}s` }}
      ></div>
    </>
  );
};

export const JsAnimation = () => {
  return <Animation animationDuration={5000} />;
};
