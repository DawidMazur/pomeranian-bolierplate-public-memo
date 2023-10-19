<<<<<<< HEAD
import { mockData } from './data';

import { DashComp } from './DashboardComponents/index';

import './styles.css';

export const Dashboard = () => {
  function renderComponent(comp) {
    return (
      <DashComp
        title={comp.title}
        img={comp.img}
        description={comp.description}
        more={comp.more}
      />
    );
  }
  return (
    <div className="dashboard">
      <h2>Hej, tu Irmina</h2>
      <p>
        Ponizej znajdziesz najwazniejsze informacje na temat mojej działalności
      </p>
      <section className="cards">{mockData.map(renderComponent)}</section>
      <section className="aside">
        <div className="photo"></div>
        <p className="name">Irmina Kalinowska</p>
        <p className="city">Gdańsk</p>
        <div className="mail">
          <p>e-mail:</p>
          <p>irminakalinowska0@gmai.com</p>
        </div>
        <div className="phone">
          <p>telefon:</p>
          <p>123 456 789</p>
        </div>
      </section>
    </div>
  );
};
=======
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>
        Strona główna kursanta (o sobie, zdjęcie, opis narzędzi wykorzystywanych
        na kursie oraz umejętności zdobytych na kursie)
      </p>
    </div>
  );
};
>>>>>>> cb1f00eac004749a93ef0ee67a825d9663c94f75
