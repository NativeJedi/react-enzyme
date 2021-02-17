import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/utils';

import Congrats from './congrats.component';

const defaultProps = {
  isSuccess: false,
};

const setup = (props = {}) => {
  const congratsProps = {
    ...defaultProps,
    ...props,
  };

  return shallow(<Congrats {...congratsProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const congratsRoot = findByTestAttr(wrapper, 'component-congrats');

  expect(congratsRoot.length).toBe(1);
});

test('renders no text when success prop is false', () => {
  const wrapper = setup({ isSuccess: false });
  const congratsText = findByTestAttr(wrapper, 'congrats-message').text();

  expect(congratsText.length).toBe(0);
});

test('renders non-empty congrats message when success is true', () => {
  const wrapper = setup({ isSuccess: true });
  const congratsText = findByTestAttr(wrapper, 'congrats-message').text();

  expect(congratsText.length).not.toBe(0);
});

