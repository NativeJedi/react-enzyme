import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import { UnconnectedInputSecretWord } from './input-secret-word.component';

const setSecretWord = jest.fn();

const defaultProps = {
  wordsCount: 0,
  setSecretWord,
};

const setup = (props) => {
  const inputProps = {
    ...defaultProps,
    ...props,
  };

  return shallow(<UnconnectedInputSecretWord {...inputProps} />);
}

describe('Input secret word', () => {
  describe('if no guessed words', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup();
    });

    test('renders without error', () => {
      const component = findByTestAttr(wrapper, 'component-input-secret-word');

      expect(component.length).toBe(1);
    });

    test('renders input secret word button', () => {
      const buttonComponent = findByTestAttr(wrapper, 'button-show-secret-input');

      expect(buttonComponent.length).toBe(1);
    });

    test('doest not render input form', () => {
      const formComponent = findByTestAttr(wrapper, 'form-secret-input');

      expect(formComponent.length).toBe(0);
    });

    describe('button click', () => {
      let buttonComponent;

      beforeEach(() => {
        buttonComponent = findByTestAttr(wrapper, 'button-show-secret-input');
        buttonComponent.simulate('click');
      });

      test('renders input form', () => {
        const component = findByTestAttr(wrapper, 'form-secret-input');

        expect(component.length).toBe(1);
      });

      test('remove itself', () => {
        const buttonAfterClick = findByTestAttr(wrapper, 'button-show-secret-input');
        expect(buttonAfterClick.length).toBe(0);
      });
    });

    describe('form submit', () => {
      const inputValue = 'train';
      let formComponent;
      let formInput;

      beforeEach(() => {
        const buttonComponent = findByTestAttr(wrapper, 'button-show-secret-input');
        buttonComponent.simulate('click');

        formInput = findByTestAttr(wrapper, 'secret-input');
        formInput.simulate('input', { target: { value: inputValue } });

        formComponent = findByTestAttr(wrapper, 'form-secret-input');
        formComponent.simulate('submit', { preventDefault: jest.fn() });
      });

      test('calls setSecretWord action creator with input value argument', () => {
        const [setSecretWordFirstArg] = setSecretWord.mock.calls[0];

        expect(setSecretWordFirstArg).toBe(inputValue);
      });

      test('clears input value', () => {
        expect(formInput.prop('value')).toBe('');
      });
    });
  });

  describe('if some guessed words', () => {
    test('component does not render at start', () => {
      const wrapper = setup({ wordsCount: 1 });
      const component = findByTestAttr(wrapper, 'component-input-secret-word');

      expect(component.length).toBe(0);
    });
  });
});
