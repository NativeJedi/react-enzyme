import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import { UnconnectedNewGame } from './new-game.component';

const resetGame = jest.fn();
const setSecretDisplay = jest.fn();
const defaultProps = {
  resetGame,
  setSecretDisplay,
  success: false,
  isSecretDisplayed: false,
};

const setup = (props = {}) => {
  const newGameProps = {...defaultProps, ...props };
  return shallow(<UnconnectedNewGame {...newGameProps}  />);
}

describe('new game button', () => {
  test('hidden on success false', () => {
    const wrapper = setup({ success: false });
    const newGameBtn = findByTestAttr(wrapper, 'new-game-btn');

    expect(newGameBtn.length).toBe(0);
  });

  test('shows on success true', () => {
    const wrapper = setup({ success: true });
    const newGameBtn = findByTestAttr(wrapper, 'new-game-btn');

    expect(newGameBtn.length).toBe(1);
  });

  test('shows on isSecretDisplayed true', () => {
    const wrapper = setup({ isSecretDisplayed: true });
    const newGameBtn = findByTestAttr(wrapper, 'new-game-btn');

    expect(newGameBtn.length).toBe(1);
  });

  describe('new game click', () => {
    let wrapper;
    let newGameBtn;

    beforeEach(() => {
      wrapper = setup({ success: true });
      newGameBtn = findByTestAttr(wrapper, 'new-game-btn');
      newGameBtn.simulate('click');
    });

    test('dispatch reset words', () => {
      expect(resetGame.mock.calls.length).toBe(1);
    });

    test('calls reset words with false argument', () => {
      const [isSecretDisplayed] = setSecretDisplay.mock.calls[0];

      expect(isSecretDisplayed).toBe(false);
    });
  });
});
