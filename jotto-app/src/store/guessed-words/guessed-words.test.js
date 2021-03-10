import { mockStore, storeFactory } from '../../test/utils';
import { guessWord, setGuessedWords } from './guessed-words.actions';

const secretWord = 'party';
const unSuccessWord = 'train';

describe('guessWord action dispatcher', () => {
  describe('no guessed words', () => {
    let store;

    const initialState = {
      secretWord,
      success: false,
      guessedWords: [],
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly with unsuccessful guess', () => {
      store.dispatch(guessWord(unSuccessWord));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [{
          word: unSuccessWord,
          letterMatchCount: 3,
        }],
      };

      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly with successful guess', () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [{
          word: secretWord,
          letterMatchCount: 5,
        }],
      };

      expect(newState).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [
      {
        word: 'agile',
        letterMatchCount: 1,
      },
    ];

    const initialState = {
      guessedWords,
      secretWord,
    };

    let store;

    beforeEach(() => {
      store = storeFactory(initialState);
    });

    test('updates state correctly with unsuccessful guess', () => {
      store.dispatch(guessWord(unSuccessWord));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            word: unSuccessWord,
            letterMatchCount: 3,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });

    test('updates state correctly with successful guess', () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            word: secretWord,
            letterMatchCount: 5,
          },
        ],
      };

      expect(newState).toEqual(expectedState);
    });
  });
});

describe('setGuessedWords action creator', () => {
  test('add word when no guessed words', () => {
    const newGuessedWords = [{ word: 'train', letterMatchCount: 3 }];
    const store = storeFactory({ guessedWords: [] });

    store.dispatch(setGuessedWords(newGuessedWords));

    const { guessedWords } = store.getState();

    expect(guessedWords).toEqual(newGuessedWords);
  });

  test('add word when some guessed words', () => {
    const newGuessedWords = [];
    const store = storeFactory({
      guessedWords: [{ word: 'party', letterMatchCount: 5 }],
    });

    store.dispatch(setGuessedWords(newGuessedWords));

    const { guessedWords } = store.getState();

    expect(guessedWords).toEqual(newGuessedWords);
  });
});
