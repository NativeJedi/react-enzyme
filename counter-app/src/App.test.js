import Enzyme,{ shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => shallow(<App/>);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

const increaseButtonClick = (wrapper) => {
  const button = findByTestAttr(wrapper, 'counter-button');

  button.simulate('click');
};

const decreaseButtonClick = (wrapper) => {
  const button = findByTestAttr(wrapper, 'counter-button-decrease');

  button.simulate('click');
};

const findCount = (wrapper) => findByTestAttr(wrapper, 'count').text();

test('renders App component', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders counter button', () => {
  const wrapper = setup();
  const counterButton = findByTestAttr(wrapper, 'counter-button');

  expect(counterButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('initial count value equals 0', () => {
  const wrapper = setup();
  const count = findCount(wrapper);

  expect(count).toBe('0');
});

test('button click increase counter', () => {
  const wrapper = setup();

  increaseButtonClick(wrapper);

  const count = findCount(wrapper);
  expect(count).toBe('1');
});

test('Decrease button click decrease counter', () => {
  const wrapper = setup();

  increaseButtonClick(wrapper);
  increaseButtonClick(wrapper);
  decreaseButtonClick(wrapper);

  const count = findCount(wrapper);
  expect(count).toBe('1');
});

test('No count below zero', () => {
  const wrapper = setup();

  increaseButtonClick(wrapper);
  decreaseButtonClick(wrapper);
  decreaseButtonClick(wrapper);

  const count = findCount(wrapper);

  expect(count).toBe('0');
});

describe('Testing counter error when goes below zero', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
    decreaseButtonClick(wrapper);
  });

  test('Count below zero renders error', () => {
    const counterError = findByTestAttr(wrapper, 'counter-error');

    expect(counterError.length).toBe(1);
  });

  test('Increase click remove counter error', () => {
    increaseButtonClick(wrapper);

    const counterError = findByTestAttr(wrapper, 'counter-error');

    expect(counterError.length).toBe(0);
  });
});
