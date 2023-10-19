import React, { useState } from 'react';

export const VanishString = () => {
  const [text, setText] = useState('');

  const handleClick = () => {
    setText('Hello');
  };
  setTimeout(() => {
    setText('');
  }, 3000);

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <h1>{text}</h1>
    </>
  );
};
