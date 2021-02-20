import moxios from 'moxios';
import { storeFactory } from '../../test/utils';
import { getSecretWord } from './secret-word.actions';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test('adds secret word to state', async () => {
    const secretWordFromServer = 'party';
    const store = storeFactory({ secretWord: '' });

    await moxios.wait(async () => {
      const request = moxios.requests.mostRecent();
      await request.respondWith({
        status: 200,
        response: [
          {
            word: secretWordFromServer,
            definition: '',
            pronunciation: '',
          },
        ],
      });
    });

    await store.dispatch(getSecretWord());
    const { secretWord } = store.getState();

    expect(secretWord).toBe(secretWordFromServer);
  });
});
