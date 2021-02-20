import { Provider } from 'react-redux';
import App, { UnconnectedApp } from './App';
import { shallow, mount } from 'enzyme';
import { mockStore } from './test/utils';

const setup = (initialState = {}) => {
  const initStore = {
    success: false,
    guessedWords: [],
    secretWord: '',
  };

  const store = mockStore({
    ...initStore,
    ...initialState,
  });

  return shallow(<App store={store} />).dive();
};

describe('redux props', () => {
  test('has getSecretWord', () => {
    const wrapper = setup();
    const { getSecretWord } = wrapper.props();

    expect(getSecretWord).toBeInstanceOf(Function);
  });

  test('has success', () => {
    const isSuccess = true;
    const wrapper = setup({ success: isSuccess });
    const { success } = wrapper.props();

    expect(success).toBe(isSuccess);
  });

  test('has secretWord', () => {
    const initialSecretWord = 'party';
    const wrapper = setup({ secretWord: initialSecretWord });
    const { secretWord } = wrapper.props();

    expect(secretWord).toBe(initialSecretWord);
  });

  test('has guessedWords', () => {
    const guessedWords = [{
      word: 'train',
      letterMatchCount: 3,
    }];

    const wrapper = setup({ secretWord: 'party', guessedWords });

    const { guessedWords: guessedWordsProp } = wrapper.props();

    expect(guessedWordsProp).toEqual(guessedWords);
  });

  test('getSecretWord runs on mount', () => {
    const getSecretWordMock = jest.fn();
    const store = mockStore({});

    const props = {
      getSecretWord: getSecretWordMock,
      success: false,
      guessedWords: [],
      secretWord: '',
    };

    mount(
      <Provider store={store}>
        <UnconnectedApp {...props} />
      </Provider>
    );

    const getSecretWordCalls = getSecretWordMock.mock.calls.length;

    expect(getSecretWordCalls).toBe(1);
  });
});
