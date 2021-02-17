import React from 'react';
import { mockStore } from '../../test/utils';
import { findByTestAttr } from '../../test/utils';
import { shallow } from 'enzyme';

import Input from './input.component';

const setup = (initialState = {}) => {
  const store = mockStore({ success: initialState });
  const wrapper = shallow(<Input store={store} />).dive().dive();

  return wrapper;
};

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setup({ isSuccess: false });
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
      wrapper = setup({ isSuccess: true });
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

describe('update state', () => {});
