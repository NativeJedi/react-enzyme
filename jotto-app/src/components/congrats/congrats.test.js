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

test('renders no text when success prop is false', () => {
  const wrapper = setup({ isSuccess: false });
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');

  expect(congratsComponent.length).toBe(0);
});

test('renders non-empty congrats message when success is true', () => {
  const wrapper = setup({ isSuccess: true });
  const congratsComponent = findByTestAttr(wrapper, 'component-congrats');

  expect(congratsComponent.length).toBe(1);
});

