/* eslint-disable no-unused-vars */
import React from 'react';

// Arrow function

export const JsExtension = () => {
  // const array = [1, 2, 3];

  // array.map(() => {}) - przykładowe zastosowanie arrow function w metodzie map

  // Każda funkcja coś zwraca - nawet jeśli nie mamy słowa kluczowego return.

  const testFunction = () => {
    // return;
  };

  console.log(testFunction(), 'testFunction()');

  const argsFunction = (a, b) => {
    console.log(a, b);

    // return;
  };

  console.log(argsFunction(1), 'argsFunction(1)');

  // WARTOŚCI DOMYŚLNE DLA ARGUMENTÓW FUNKCJI

  const sayMyName = (name = 'Jan', surname = 'Kowalski') => {
    return `My name is ${name} ${surname}`;
  };

  // SPOSOBY PRZEKAZANIA ARGUMENTÓW DO FUNKCJI Z WARTOŚCIAMI DOMYŚLNYMI

  console.log(sayMyName(), '---------- 1 ---------- sayMyName()');

  console.log(sayMyName('Piotr'), '---------- 2 ---------- sayMyName()');

  console.log(
    sayMyName('Krzysztof', 'Dowolny'),

    '---------- 3 ---------- sayMyName()'
  );

  // SPREAD OPERATOR - NIEOKREŚLONA LICZBA ARGUMENTÓW FUNKCJI

  const sum = (...args) => {
    return args.reduce((acc, curr) => acc + curr, 0);
  };

  console.log(sum(1, 2, 5, 10));

  // arguments - słowo wbudowane w JS, które zwraca tablicę wszystkich argumentów przekazanych do funkcji

  function sum2(a, b, c) {
    return Array.from(arguments).reduce((acc, curr) => acc + curr, 0);
  }

  console.log(sum2(1, 5, 10), 'sum2(1,5,10)');

  // --------------------------------------------

  const outerFunction = () => {
    const innerFunction = () => {
      return 'innerFunction';
    };

    return innerFunction;
  };

  const out = outerFunction();

  console.log(out, 'out');

  // ... kod

  console.log(out(), 'out innerFunction');

  // --------------------------------------------

  // SILNIA - REKURENCYJNIE

  const strong = (n) => {
    // early return

    if (n === 0) return 1;

    return n * strong(n - 1);
  };

  console.log(strong(4), 'strong(4)');

  console.log(strong(0), 'strong(0)');

  // --------------------------------------------

  // --------------------------------------------

  const simpleFunction = () => {
    const a = 5;

    const innerFunction = (b) => {
      return a * b;
    };

    return innerFunction;
  };

  const simple = simpleFunction()(4);

  // -------------------- funkcepcja ------------------------

  const xFunction = () => {
    return (x, y) => {
      // x = 1

      // y = 23

      // ...  kod

      // x

      return (str) => {
        // str = 'aba'

        // ...  kod + x

        return () => {
          return 'test';
        };
      };
    };
  };

  console.log(xFunction()(1, 23)('aba')(), 'xFunction()()()()');

  const calculateWithChar = (operator) => {
    return (arg1, arg2) => {
      if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
        return 'złe wejście';
      }
      switch (operator) {
        case '+':
          return arg1 + arg2;
        case '-':
          return arg1 - arg2;
        case '/':
          return arg1 / arg2;
        case '*':
          return arg1 * arg2;
        default:
          return 'zły znak';
      }
    };
  };
  console.log('calculateWithChar: ' + calculateWithChar('/')(7, 3));

  const sortImmute = (arr) => {
    const sortedArr = [...arr].sort((a, b) => a > b);
    return sortedArr;
  };
  console.log('sortImmute: ' + sortImmute([2, 3, 6, 7, 3, 4, 2, 100, 20]));

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  console.log('Fibonacci: ' + fibonacci(6));

  const sumOfParams = (...args) => {
    return args.reduce((acc, curr) => {
      if (typeof acc === 'string') return 'złe wejście';
      return acc + curr;
    });
  };
  console.log('sumOfParams: ' + sumOfParams(2, 34, 6, 7));

  const zliczWystapienia = (arg) => {
    // if (typeof arg !== 'number') return 'złe wejście';
    return (...arr) => {
      if (typeof arg !== 'number') return 'złe wejście';
      // console.log(arr, 'arr');
      const newArr = arr.filter((el) => el === arg);
      // console.log(newArr, 'newarr');
      return newArr.length;
    };
  };
  console.log(
    'zliczWystapienia: ' +
      zliczWystapienia(1)(1, 1, 5, 6, 7, 'hello', 1, 1, 'jaa')
  );

  return <div>Js rozszerzenie wiedzy</div>;
};

// Named function

// export function JsExtension() {

//   return <div>Js rozszerzenie wiedzy</div>;

// }

// Anonymous function

// export const JsExtension = function () {

//   return <div>Js rozszerzenie wiedzy</div>;

// };

// IIFE - Immediately Invoked Function Expression

// (() => {

//   console.log('test');

// })();

// ----------------Zadania---------------
