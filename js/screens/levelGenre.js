import {createElement} from './../utils';
import {renderScreen} from './../renderScreen';
import {levels} from './../data/data';

export default (state) => {
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


