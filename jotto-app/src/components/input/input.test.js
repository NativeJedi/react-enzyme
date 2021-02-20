import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../../test/utils';
import { findByTestAttr } from '../../test/utils';
import { shallow, mount } from 'enzyme';

import Input, { UnconnectedInput } from './input.component';

const setup = (initialState) => {
  const store = mockStore(initialState);
  const wrapper = shallow(<Input store={store} />);

  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const rootWrapper = setup({ success: false });
      wrapper = rootWrapper.dive().dive();
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');
      expect(component.length).toBe(1);
    });

    test('renders submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');
      expect(component.length).toBe(1);
    });
  });

  describe('word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
      const rootWrapper = setup({ success: true });
      wrapper = rootWrapper.dive().dive();
    });

    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');

      expect(component.length).toBe(1);
    });

    test('renders does not input box', () => {
      const component = findByTestAttr(wrapper, 'input-box');

      expect(component.length).toBe(0);
    });

    test('renders does not submit button', () => {
      const component = findByTestAttr(wrapper, 'submit-button');

      expect(component.length).toBe(0);
    });
  });
});

describe('update state', () => {
  let wrapper;
  let guessWord;
  const inputValue = 'train';

  beforeEach(() => {
    const store = mockStore({});
    guessWord = jest.fn();

    const props = {
      guessWord,
      success: false,
    };

    wrapper = mount(
      <Provider store={store}>
        <UnconnectedInput {...props} />
      </Provider>
    );

    const input = findByTestAttr(wrapper, 'input-box');
    input.simulate('input', { target: { value: inputValue }});
    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    submitBtn.simulate('click');
  });

  test('runs guessWord on submit click', () => {
    expect(guessWord.mock.calls.length).toBe(1);
  });

  test('guessWord calls with correct argument after user input', () => {
    const [guessedWordArg] = guessWord.mock.calls[0];

    expect(guessedWordArg).toBe(inputValue);
  });

  test('input value clears after submit', () => {
    const input = findByTestAttr(wrapper, 'input-box');

    expect(input.prop('value')).toBe('');
  });
});

describe('redux props', () => {
  let props;

  beforeEach(() => {
    const wrapper = setup({ success: true });
    props = wrapper.dive().props();
  });

  test('has success prop', () => {
    expect(props.success).toBe(true);
  });

  test('has guessWord action creator', () => {
    expect(props.guessWord).toBeInstanceOf(Function);
  });
});
