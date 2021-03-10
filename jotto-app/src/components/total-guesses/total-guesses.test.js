import { mount } from 'enzyme';
import { findByTestAttr } from '../../test/utils';
import TotalGuesses from './total-guesses.component';

const setup = (props = {}) => {
  return mount(<TotalGuesses {...props} />);
};

describe('total guesses', () => {
  test('has zero init value', () => {
    const wrapper = setup({ totalGuesses: 0 });
    const totalCount = findByTestAttr(wrapper, 'total-count').text();

    expect(totalCount).toBe('0');
  });

  test('update total count after GUESS_WORD dispatch', () => {
    const wrapper = setup({ totalGuesses: 1 });
    const totalCount = findByTestAttr(wrapper, 'total-count').text();

    expect(totalCount).toBe('1');
  });
});
