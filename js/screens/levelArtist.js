import {createElement} from '../utils';
import {renderScreen} from './../renderScreen';
import {levels} from './../data/data';

export default (state) => {
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

