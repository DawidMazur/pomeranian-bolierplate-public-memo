import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// const cards = [
//   { id: 1, key: 'A', isDone: true },
//   { id: 2, key: 'U', isDone: false },
//   { id: 3, key: 'K', isDone: false },
//   { id: 4, key: 'R', isDone: false },
//   { id: 5, key: 'K', isDone: false },
//   { id: 6, key: 'U', isDone: false },
//   { id: 7, key: 'A', isDone: true },
//   { id: 8, key: 'R', isDone: false },
// ];

// gdzie przechowywać informacje czy ma być wyświetlane?
// gdzie przechowywać informacje która jest kliknięta 1 i 2?

// podejście 2

// const cards2 = [
//   { id: 1, key: 'A' },
//   { id: 2, key: 'U' },
//   { id: 3, key: 'K' },
//   { id: 4, key: 'R' },
//   { id: 5, key: 'K' },
//   { id: 6, key: 'U' },
//   { id: 7, key: 'A' },
//   { id: 8, key: 'R' },
// ];

const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [gameCards, setGameCards] = useState([]);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [isWrong, setIsWrong] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setTime(game_time);
    setScore(0);
    setIsGameEnded(false);
  };
  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
    // clearInterval(intervalId);
  };

  const setCardDone = (id, id2) => {
    setGameCards(
      gameCards.map((el) => {
        if (el.id === id || el.id === id2) {
          return { ...el, isDone: true };
        }
        return el;
      })
    );
  };

  const descriptionHandleClick = (card) => {
    // ignorujemy ukończone elementy
    // sprawdzamy czy to pierwsze kliknięcie i jeśli tak to zapisujemy 1 kliknięcie (i wychodzimy z funkcji)
    // sprawdzamy czy klikamy w ten sam element (jeśli tak to wychodzimy z funkcji i nic nie robimy)
    // zapisujemy drugie kliknięcie (bo wiemy że jest drugie i nie jest takie same skoro tutaj dotarliśmy)
    // jak są te same key to ustawiamy isDone na true dla obu elementów i zwiększamy score o 1
    // jak nie są te same to fajnie jakoś zapisać, że ruch był błędny (dodatkowy use state by wiedzieć kiedy wyświetlać czerwone tła ;D )
    // ustawiamy czyszczenie kliknięć, najlepiej z opóźnieniem by ewentualne czerwone tła miały czas się pokazać (setTimeout)
  };

  const handleClick = (card) => {
    // ignorujemy ukończone elementy
    if (card.isDone) {
      return;
    }

    // zapisujemy 1 kliknięcie
    if (firstCard == null) {
      setFirstCard(card);
      return;
    }

    // sprawdzamy czy klikamy w ten sam element
    if (firstCard.id === card.id) {
      return;
    }

    // zapisujemy drugie kliknięcie
    setSecondCard(card);
    setMoves(moves + 1);

    // jak są te same key
    if (firstCard.key === card.key) {
      setCardDone(firstCard.id, card.id);
      setScore(score + 1);
      setFirstCard(null);
      setSecondCard(null);
      return;
    } else {
      setIsWrong(true);
    }

    clearSetCards();
  };

  const clearSetCards = () => {
    setTimeout(() => {
      setFirstCard(null);
      setSecondCard(null);
      setIsWrong(false);
    }, 500);
  };

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }

  const cardsGenerator = (num) => {
    const newArray = [];
    for (let i = 0; i < num / 2; i++) {
      newArray.push({ id: i, key: keys[i], isDone: false });
      newArray.push({ id: num / 2 + i, key: keys[i], isDone: false });
    }
    const shuffleCards = shuffleArray(newArray);
    setGameCards(shuffleCards);
    // console.log(gameCards);
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
      // handleStopGame();
      setIsGameEnded(true);
    }
  }, [time]);

  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  return (
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Memo
      </NavLink>
      {isGameEnded ? (
        <h2 className="memo">
          Gratulacje! Twój wynik to: {score} par w czasie !
        </h2>
      ) : (
        <h2 className="memo">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h2>
      )}
      {isGameStarted ? (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Czas gry</div>
              <div className="content">
                <button className="button_memo score">
                  {min}:{sec}
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Liczba ruchów</div>
              <div className="content">
                <button className="button_memo score">{moves}</button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStopGame} className="button_memo stop">
                  Pass
                </button>
              </div>
            </div>
          </div>
          <div className={`cardsplace ${isWrong && 'wrong'} `}>
            {/* 
//   {gameCards.map((el) => {
//     waruner 1
//     if (el.isDone) 

//     waruneki 2
//     czy to 1 lub 2 kliknięta karta

//     return (
//       I tutaj mamy 3 możliwe opcje:
//       karta zakryta
//       karta na stałe odkryta
//       karta własnie odkryta (może być czerwona)
//     );
//   })} */}
            {gameCards.map((el) => {
              let classes = '';

              // waruner 1
              if (el.isDone) {
                classes += 'done';
              }

              // warunek 2
              if (firstCard && firstCard.id === el.id) {
                classes += ' clicked ';
              }
              if (secondCard && secondCard.id === el.id) {
                classes += ' clicked ';
              }

              return (
                <div
                  key={el.id}
                  onClick={() => handleClick(el)}
                  className={`onecard ${classes}`}
                >
                  <span>{el.key}</span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Liczba elementów</div>
              <div className="content">
                <button
                  onClick={() => cardsGenerator(8)}
                  className={
                    gameCards.length === 8
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  8 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 3))
                  // }
                  onClick={() => cardsGenerator(16)}
                  className={
                    gameCards.length === 16
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  16 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 5))
                  // }
                  onClick={() => cardsGenerator(20)}
                  className={
                    gameCards.length === 20
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  20 elementów
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStartGame} className="button_memo start">
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
