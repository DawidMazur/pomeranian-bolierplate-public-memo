import './styles.css';
import { useState } from 'react';

import { SettingIcon } from '../Icons/SettingIcon';
import { ChevronIcon } from '../Icons/faq/ChevronIcon';
import { NotificationIcon } from '../Icons/NotificationIcon';

export const HeaderMenu = () => {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }
  const loginClassName = active ? 'loginPanel' : 'loginPanelHidden';

  return (
    <div className="profilepanel">
      <NotificationIcon />
      <SettingIcon />
      <div className="profilepic"></div>
      <div className="profiledata">
        <p>Irmina</p>
        <p>Kursantka</p>
      </div>
      <div className="chevronIcon" onClick={handleClick}>
        <ChevronIcon />
      </div>
      <div className={loginClassName}>
        <div className="chevronIcon" onClick={handleClick}>
          <ChevronIcon />
        </div>
        <button className="login">Zaloguj się</button>
        <p>
          Nie masz konta?
          <a href="#">Zarejestruj się</a>
        </p>
      </div>
    </div>
  );
};
