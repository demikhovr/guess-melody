import {createElement} from './../utils';
// import {renderScreen} from './../renderScreen';
// import welcome from './welcome';
import {header} from '../data/data';

export default (state) => {
  const success = `
  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
  <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>`;

  const failure = `
  <h2 class="title">Вы проиграли</h2>
  <div class="main-stat">Ничего, вам повезет в следующий раз</div>`;

  const content = state ? success : failure;

  const template = `
  <section class="main main--result">
    <section class="logo" title="${header.title}"><h1>${header.title}</h1></section>
    ${content}
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

  const result = createElement(template);
  const replayBtn = result.querySelector(`.main-replay`);

  replayBtn.addEventListener(`click`, () => {
    // renderScreen(welcome);
  });

  return result;
};

