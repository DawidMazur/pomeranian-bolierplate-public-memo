import React from 'react';

// 1. length - sprawdza dlugosc
// 2. charAt() - zwraca nam litere pod podanym indeksem
// 3. trim() - ucina nam puste miejsca po obu koncach stringa (zostawia te w srodku)
// 4. replace() - zamienia podany string na inny podany (tylko pierwszy)
// 5. replaceAll() - zamienia podany string na inny podany (wszystkie)
// 6. split() - zamienia string w tablice z elementami stringa
// 7. indexOf() - zwraca index pod ktorym jest szukana fraza
// 8. toUpperCase()/toLowerCase() - podnosi do wielkiej lub malej litery
// 9. includes() - zwraca boolean czy string zawiera dany ciag znakow
// 10. startsWith() - zwraca boolean czy string zaczyna sie od danego ciagu znakow

// 1. Napisz funkcje która zwraca string z podniesioną pierwszą literą
// 2. Napisz funkcje która obcina string po x znakach, x przekaz jak argument funkcji
// 3. Napisz funkcję która sprawdza czy email jest poprawny (czy posiada @ i czy występuje kropka po @)
// 4. Napisz funkcje która sprawdza czy string jest palindromem

function exeOne(str) {
  const result = str.charAt(0).toUpperCase() + str.slice(1);
  return `${str} => ${result}`;
}
function exeTwo(str, num) {
  const result = str.slice(num);
  return `${str} => ${result}`;
}
function exeThree(mail) {
  const atIndex = mail.indexOf('@');
  const dotIndex = mail.indexOf('.');
  if (atIndex > 0 && dotIndex > 0 && dotIndex > atIndex) {
    return 'Udana rejestracja';
  } else {
    return 'Podaj prawidłowy email';
  }
}
function exeFour(str) {
  const strArr = str.split('').reverse();
  const rev = strArr.join('');
  if (rev === str) {
    return `Wyraz ${str} jest palindromem`;
  } else {
    return ` Wyraz ${str} nie jest palindromem`;
  }
}

export const StringMethods = () => {
  return (
    <div>
      <h2>String methods cardio</h2>
      <p> Pierwsze zadanie: {exeOne('hello!')}</p>
      <p> Drugie zadanie: {exeTwo('hello!', 2)}</p>
      <p> Trzecie zadanie: {exeThree('irmina@hm.dk')}</p>
      <p> Czwarte zadanie: {exeFour('kajak')}</p>
    </div>
  );
};
