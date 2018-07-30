(function () {
  'use strict';

  const createElement = (template) => {
    const div = document.createElement(`div`);

    div.innerHTML = template.trim();

    return div.firstChild;
  };

  const initialState = Object.freeze({
    level: 0,
    lives: 3,
    times: 0
  });

  const levels = [
    {
      type: `artist`,
      id: 1,
      question: `Кто исполняет эту песню?`,
      audio: ``,
      answers: [
        {
          id: 1,
          content: {
            label: `Slipknot`,
            image: `null`,
          }
        },
        {
          id: 2,
          content: {
            label: `Korn`,
            image: `null`,
          }
        },
        {
          id: 3,
          content: {
            label: `Егор Крид`,
            image: `null`,
          }
        }
      ],
      correctAnswerId: 2,
      nextLevel: 1
    },
    {
      type: `artist`,
      id: 1,
      question: `Кто исполняет эту песню?`,
      audio: ``,
      answers: [
        {
          id: 1,
          content: {
            label: `Korn`,
            image: ``,
          }
        },
        {
          id: 2,
          content: {
            label: `Slipknot`,
            image: ``,
          }
        },
        {
          id: 3,
          content: {
            label: `Егор Крид`,
            image: ``,
          }
        }
      ],
      correctAnswerId: 2,
      nextLevel: 2
    },
    {
      type: `genre`,
      id: 2,
      question: `Выберите инди-рок треки`,
      answers: [
        {
          id: 0,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: false
        },
        {
          id: 1,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: true
        },
        {
          id: 2,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: true
        },
        {
          id: 3,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: false
        }
      ],
      nextLevel: 3
    },
    {
      type: `artist`,
      id: 1,
      question: `Кто исполняет эту песню?`,
      audio: ``,
      answers: [
        {
          id: 1,
          content: {
            label: `Korn`,
            image: ``,
          }
        },
        {
          id: 2,
          content: {
            label: `Slipknot`,
            image: ``,
          }
        },
        {
          id: 3,
          content: {
            label: `Егор Крид`,
            image: ``,
          }
        }
      ],
      correctAnswerId: 2,
      nextLevel: 4
    },
    {
      type: `genre`,
      id: 2,
      question: `Выберите инди-рок треки`,
      answers: [
        {
          id: 0,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: false
        },
        {
          id: 1,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: true
        },
        {
          id: 2,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: true
        },
        {
          id: 3,
          content: {
            label: `Пелагея`,
            image: ``,
            audio: ``
          },
          isCorrect: false
        }
      ],
      nextLevel: 5
    }
  ];

  const header = {
    title: `Угадай мелодию`
  };

  var welcomeScreen = () => {
    const template = `
    <section class="main main--welcome">
      <section class="logo" title="${header.title}"><h1>${header.title}</h1></section>
      <button class="main-play">Начать игру</button>
      <h2 class="title main-title">Правила игры</h2>
      <p class="text main-text">
        Правила просты&nbsp;— за&nbsp;2 минуты дать
        максимальное количество правильных ответов.<br>
        Удачи!
      </p>
    </section>`;

    const welcome = createElement(template);
    const playBtn = welcome.querySelector(`.main-play`);

    const playBtnClickHandler = () => {
      renderScreen(Object.assign({}, initialState));
    };

    playBtn.addEventListener(`click`, playBtnClickHandler);

    return welcome;
  };

  var levelArtistScreen = (state) => {
    const timer = `
  <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
    <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">02</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">00</span>
    </div>
  </svg>`;

    const title = `<h2 class="title main-title">Кто исполняет эту песню?</h2>`;

    const template = `
    <section class="main main--level main--level-artist">
      ${timer}
      <div class="main-wrap">
        <div class="main-timer"></div>
        ${title}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${levels[state.level].answers.map((answer) =>
            `<div class="main-answer-wrapper" data-answer="${answer.id}">
                <input class="main-answer-r" type="radio" id="${answer.id}" name="answers-${state.level}" value="${answer.content.label}">
                <label class="main-answer" for="answer-${answer.id}">
                  <img class="main-answer-preview" src="${answer.content.image}">
                    ${answer.content.label}
                </label>
              </div>`).join(``)}
        </form>
      </div>
    </section>`;

    const levelArtist = createElement(template);
    const answers = levelArtist.querySelectorAll(`.main-answer-wrapper`);

    [...answers].forEach((answer) => {
      answer.addEventListener(`click`, (evt) => {
        const isCorrect = +answer.dataset.answer === levels[state.level].correctAnswerId;

        if (!isCorrect) {
          --state.lives;
        }

        state.level = levels[state.level].nextLevel;

        renderScreen(state);
      });
    });

    return levelArtist;
  };

  var levelGenreScreen = (state) => {
    const title = `<h2 class="title">Выберите инди-рок треки</h2>`;

    const template = `
  <section class="main main--level main--level-genre">
    ${title}
    <form class="genre">
      ${levels[state.level].answers.map((answer) =>
        `<div class="genre-answer">
          <div class="player-wrapper"></div>
          <input type="checkbox" name="answer-${state.level}" value="${answer.content.label}" id="${answer.id}">
          <label class="genre-answer-check" for="${answer.id}"></label>
        </div>`
      )}
      <button class="genre-answer-send" type="submit" disabled>Ответить</button>
    </form>
  </section>`;

    const levelGenre = createElement(template);
    const answers = levelGenre.querySelectorAll(`.genre-answer input[type="checkbox"]`);
    const answerBtn = levelGenre.querySelector(`.genre-answer-send`);
    const genreForm = levelGenre.querySelector(`.genre`);

    genreForm.addEventListener(`change`, (evt) => {
      evt.preventDefault();

      const isValid = [...answers].some((answer) => answer.checked);

      answerBtn.disabled = !isValid;
    });

    answerBtn.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      const isCorrect = [...answers].every((answer, i) => answer.checked === levels[state.level].answers[i].isCorrect);

      if (!isCorrect) {
        --state.lives;
      }

      state.level = levels[state.level].nextLevel;

      renderScreen(state);
    });

    return levelGenre;
  };

  const mainScreen = document.querySelector(`section.main`);

  const clearScreen = () => {
    mainScreen.innerHTML = ``;
  };

  const renderScreen = (state) => {
    let screen = null;

    if (!state) {
      screen = welcomeScreen();
    } else {
      switch (levels[state.level].type) {
        case `artist`:
          screen = levelArtistScreen(state);
          break;
        case `genre`:
          screen = levelGenreScreen(state);
          break;
      }
    }

    clearScreen();
    mainScreen.appendChild(screen);
  };

  renderScreen();

}());

//# sourceMappingURL=main.js.map
