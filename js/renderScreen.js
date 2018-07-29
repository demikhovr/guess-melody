import welcomeScreen from './screens/welcome';
import levelArtistScreen from './screens/levelArtist';
import levelGenreScreen from './screens/levelGenre';
import {levels} from './data/data';

const mainScreen = document.querySelector(`section.main`);

export const clearScreen = () => {
  mainScreen.innerHTML = ``;
};

export const renderScreen = (state) => {
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
