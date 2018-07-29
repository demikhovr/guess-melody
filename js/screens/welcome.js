import {createElement} from './../utils';
import {renderScreen} from '../renderScreen';
import {header} from '../data/data';
import {initialState} from './../data/data';

export default () => {
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

