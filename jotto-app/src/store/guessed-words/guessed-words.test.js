import { storeFactory } from '../../test/utils';
import { guessWord } from './guessed-words.actions';

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
