import moxios from 'moxios';
import { mockStore } from '../../test/utils';
import { SET_GUESSED_WORDS } from '../guessed-words/guessed-words.types';
import { SET_SECRET_WORD } from '../secret-word/secret-word.types';
import { SET_SUCCESS } from '../success/success.types';
import { resetGame } from './actions';

describe('actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('resetGame updates state', async () => {
    const initialSecretWord = 'party';
    const fetchedSecretWord = 'train';

    const store = mockStore({
      success: true,
      secretWord: initialSecretWord,
      guessedWords: [
        {
          word: 'train',
          letterMatchCount: 3,
        },
      ],
    });

    await moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: [
          {
            word: fetchedSecretWord,
            definition: '',
            pronunciation: '',
          },
        ],
      });
    });

    await store.dispatch(resetGame());

    const expectedActions = [
      { type: SET_GUESSED_WORDS, payload: [] },
      { type: SET_SUCCESS, payload: false },
      { type: SET_SECRET_WORD, payload: fetchedSecretWord },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
