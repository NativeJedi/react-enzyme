import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import GiveUp from './give-up.component';

const setSecretDisplay = jest.fn();
const defaultProps = {
  success: false,
  wordsCount: 0,
  setSecretDisplay,
};

const setup = (props) => {
  const giveUpProps = {
    ...defaultProps,
    ...props,
  };

  return shallow(<GiveUp {...giveUpProps} />);
};

describe('Give up button', () => {
  describe('Hidden', () => {
    test('when success is true', () => {
      const wrapper = setup({ success: true, wordsCount: 2 });
      const giveUpBtn = findByTestAttr(wrapper, 'give-up-button');

      expect(giveUpBtn.length).toBe(0);
    });

    test('when there are no words guessed', () => {
      const wrapper = setup({ success: false, wordsCount: 0 });
      const giveUpBtn = findByTestAttr(wrapper, 'give-up-button');

      expect(giveUpBtn.length).toBe(0);
    });
  });

  test('calls setSecretDisplay on click with true arg', () => {
    const wrapper = setup({ success: false, wordsCount: 2 });
    const giveUpBtn = findByTestAttr(wrapper, 'give-up-button');

    giveUpBtn.simulate('click');

    const [isSecretDisplayed] = setSecretDisplay.mock.calls[0];
    expect(isSecretDisplayed).toBe(true);
  });
});
