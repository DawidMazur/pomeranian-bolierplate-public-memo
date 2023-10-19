import './styles.css';

/* 
1. Napisz funkcje ktora przyjmuje dwie tablice i zwraca nowa tablice, ktora zawiera tylko elementy, ktore wystepuja w obu tablicach.
Przykład: getCommonElements([1, 2, 3, 4, 5], [3, 5, 7, 9]) => [3, 5]
2. Napisz funkcje `averageFromArray` która liczy średnią z liczb w tablicy nie używając pętli for i reduce. Przykład: getAverageNumber([1, 2, 3, 4, 5, 6]) => 3.5
3. Napisz funkcję, która przyjmuje tablicę liczb i zwraca tablicę zawierającą te same liczby, ale w
odwróconej kolejności. 
Przykład: getReversedArray([1, 2, 3, 4, 5]) => [5, 4, 3, 2, 1]
4. napisz funkcję, która przyjmuje tablicę obiektów, gdzie każdy obiekt reprezentuje osobę z imieniem i wiekiem, i zwraca tablicę z samymi imionami osób.
Przykład: getNames(people) => ["John", "Emily", "Peter"]
*/
const arr1 = [12, 2, 4];
const arr2 = [5, 6, 7, 2, 4];
const people = [
  { name: 'John', age: 22 },
  { name: 'Emily', age: 43 },
  { name: 'Peter', age: 38 },
];

export function ArrayBasics() {
  function getCommonElements(arr1, arr2) {
    const result = arr1.filter((el) => arr2.includes(el));
    return `Rezulatat to: ${result}`;
  }
  function getAverageNumber(arr1) {
    const sum = arr1.reduce((el1, el2) => {
      return el1 + el2;
    }, 0);
    return sum / arr1.length;
  }
  function getReversedArray(array) {
    return [...array].reverse();
  }
  function getNames(people) {
    return people.map((person) => person.name);
  }

  return (
    <ol>
      <li>{getCommonElements(arr1, arr2)}</li>
      <li>{getAverageNumber(arr1)}</li>
      <li>{getReversedArray(arr2)}</li>
      <li>{getNames(people)}</li>
    </ol>
  );
}
