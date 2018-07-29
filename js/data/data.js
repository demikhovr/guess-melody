export const initialState = Object.freeze({
  level: 0,
  lives: 3,
  times: 0
});

export const levels = [
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

export const header = {
  title: `Угадай мелодию`
};
