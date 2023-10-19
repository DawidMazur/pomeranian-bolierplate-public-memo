<<<<<<< HEAD
import React from 'react';
import './styles/header.css';

//utwórz mi komponent react o nazwie Logo ze sciezki do pliku ktora podalem
import { ReactComponent as PomeranianLogo } from '../Images/start-it-logo.svg';
import { HeaderMenu } from '../Components/HeaderMenu/HeaderMenu';
import HeaderInput from '../Components/HeaderInput/HeaderInput';

export function AppHeader() {
  return (
    //tag jsx -> html
    <header>
      {/* // component react  */}
      <PomeranianLogo />

      <HeaderInput />

      <HeaderMenu />
    </header>
  );
}
=======
import React from 'react';

import './styles/header.css';

export function AppHeader() {
  return (
    <header>
      <div>
        <div className="header-title">Tytuł nagłówka</div>
      </div>
    </header>
  );
}
>>>>>>> cb1f00eac004749a93ef0ee67a825d9663c94f75
