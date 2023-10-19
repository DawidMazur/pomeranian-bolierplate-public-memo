import { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';

import molepng from '../../../Images/mole.png';

import './styles.css';

const fields = [
  { id: 1, hasClicked: false },

  { id: 2, hasClicked: false },

  { id: 3, hasClicked: false },

  { id: 4, hasClicked: false },

  { id: 5, hasClicked: false },

  { id: 6, hasClicked: false },

  { id: 7, hasClicked: false },

  { id: 8, hasClicked: false },

  { id: 9, hasClicked: false },

  { id: 10, hasClicked: false },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getRandomMoleFields = (numberOfMoles) => {
  const moleFields = [];

  while (moleFields.length < numberOfMoles) {
    const randomField = getRandomInt(fields.length);

    if (!moleFields.includes(randomField)) {
      moleFields.push(randomField);
    }
  }
  return moleFields;
};

const interval_time = 1000;

const game_time = 60;

export const HitTheMole = () => {
  const [gameFields, setGameFields] = useState(fields);

  const [moleFieldIds, setMoleFieldIds] = useState(getRandomMoleFields(1));

  const [initialTime, setInitialTime] = useState(game_time);

  const [time, setTime] = useState(game_time);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [isGameEnded, setIsGameEnded] = useState(false);

  const [previousMoleFieldIds, setPreviousMoleFieldIds] = useState([]);

  const [score, setScore] = useState(0);

  const [intervalId, setIntervalId] = useState(null);

  const [numberOfMoles, setNumberOfMoles] = useState(1);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setTime(initialTime);
    setMoleFieldIds(getRandomMoleFields(numberOfMoles));

    const intervalId = setInterval(() => {
      setMoleFieldIds(getRandomMoleFields(numberOfMoles));
    }, interval_time);

    setIntervalId(intervalId);

    setScore(0);
    setIsGameEnded(false);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);

    clearInterval(intervalId);
  };

  const resetClickField = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => {
          return {
            ...field,

            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const scoreUpdate = (isMolePresent) => {
    isMolePresent ? setScore(score + 1) : setScore(score - 1);
  };

  const handleClickField = (clickedField, isMolePresent) => {
    setGameFields(
      gameFields.map((field) => {
        return {
          ...field,
          hasClicked: field.id === clickedField.id,
        };
      })
    );

    resetClickField();

    scoreUpdate(isMolePresent);

    if (isMolePresent) {
      setPreviousMoleFieldIds(moleFieldIds);
      // Opóźnienie zeby zielone pole pokrylo sie z krecikiem
      setTimeout(() => {
        setMoleFieldIds(getRandomMoleFields(numberOfMoles));
      }, 50);
      // setMoleFieldId(getRandomInt(10));

      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        setMoleFieldIds(getRandomMoleFields(numberOfMoles));
      }, interval_time);
      setIntervalId(newIntervalId);
    }
  };

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
      setIsGameEnded(true);
    }
  }, [time]);

  return (
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Kret
      </NavLink>
      {isGameEnded ? (
        <h2 className="mole">Gratulacje! Twój wynik to: {score}</h2>
      ) : (
        <h2 className="mole">
          Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
          którym się pojawił.
        </h2>
      )}
      {/* <h2 className="mole">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </h2> */}

      {isGameStarted ? (
        <div>
          <div className="container_table">
            {/* CZAS do końca  */}

            <div className="container_row">
              <div className="title_mole">Czas do końca</div>

              <div className="content">
                <button disabled={true} className="button_mole score">
                  {time}
                </button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="container_row">
              <div className="title_mole">Wynik</div>

              <div className="content">
                <button disabled={true} className="button_mole score">
                  {score}
                </button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div className="container_row">
              <div className="title_mole">Przyciski sterujące</div>

              <div className="content">
                <button onClick={handleStopGame} className="button_mole stop">
                  Stop
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ŁAPANIA KRETA */}

          <div className="game_field">
            {gameFields.map((field) => {
              const isMolePresent = moleFieldIds.includes(field.id);

              const isPreviousMolePresent = previousMoleFieldIds.includes(
                field.id
              );
              const isClickedWithMole =
                isPreviousMolePresent && field.hasClicked ? 'green' : '';

              const isClickedWithoutMole =
                !isPreviousMolePresent && field.hasClicked ? 'red' : '';

              return (
                <div
                  onClick={() => handleClickField(field, isMolePresent)}
                  className={`field ${isClickedWithMole} ${isClickedWithoutMole}`}
                >
                  {isMolePresent && <img src={molepng} alt="mole" />}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          {/* {isGameEnded && (
            <div className="congratulations">
              <h3>Gratulację! Twój wynik to: {score}</h3>
            </div>
          )} */}
          {/* CZAS gry */}

          <div className="container_row">
            <div className="title_mole">Czas gry</div>

            <div className="content">
              <button
                onClick={() => setInitialTime(60)}
                className={
                  initialTime === 60 ? 'current button_mole' : 'button_mole'
                }
              >
                1 minuta
              </button>
              <button
                onClick={() => setInitialTime(120)}
                className={
                  initialTime === 120 ? 'current button_mole' : 'button_mole'
                }
              >
                2 minuty
              </button>
              <button
                onClick={() => setInitialTime(180)}
                className={
                  initialTime === 180 ? 'current button_mole' : 'button_mole'
                }
              >
                3 minuty
              </button>
            </div>
          </div>

          {/* LICZBA KRETÓW */}

          <div className="container_row">
            <div className="title_mole">Liczba kretów</div>

            <div className="content">
              <button
                onClick={() => setNumberOfMoles(1)}
                className={
                  numberOfMoles === 1 ? 'current button_mole' : 'button_mole'
                }
              >
                1 kret
              </button>
              <button
                onClick={() => setNumberOfMoles(2)}
                className={
                  numberOfMoles === 2 ? 'current button_mole' : 'button_mole'
                }
              >
                2 krety
              </button>
              <button
                onClick={() => setNumberOfMoles(3)}
                className={
                  numberOfMoles === 3 ? 'current button_mole' : 'button_mole'
                }
              >
                3 krety
              </button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}

          <div className="container_row">
            <div className="title_mole">Przyciski sterujące</div>

            <div className="content">
              <button onClick={handleStartGame} className="button_mole start">
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
