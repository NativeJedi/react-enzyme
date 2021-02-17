import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/utils';

import GuessedWords from './guessed-words.component';

const defaultProps = {
  guessedWords: [
    { word: 'train', letterMatchCount: 3 },
  ],
};

const setup = (props) => {
  const setupProps = {
    ...defaultProps,
    ...props,
  };

  return shallow(<GuessedWords {...setupProps} />);
};

test('passed props dont call a warning', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('If there are no words guessed', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('renders without error', () => {
    const guessedWrapper = findByTestAttr(wrapper, 'component-guessed-words');

    expect(guessedWrapper.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructionsText = findByTestAttr(wrapper, 'guessed-instructions').text();

    expect(instructionsText.length).not.toBe(0);
  });
});

describe('If there are words guessed', () => {
  let wrapper;

  const guessedWords = [
    { word: 'train', letterMatchCount: 3 },
    { word: 'agile', letterMatchCount: 1 },
    { word: 'party', letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test('renders without error', () => {
    const guessedWrapper = findByTestAttr(wrapper, 'component-guessed-words');

    expect(guessedWrapper.length).toBe(1);
  });

  test('renders guessed words section', () => {
    const guessedWordsWrapper = findByTestAttr(wrapper, 'guessed-words');

    expect(guessedWordsWrapper.length).toBe(1);
  });

  test('renders correct number of guessed words', () => {
    const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word');

    expect(guessedWordNodes.length).toBe(guessedWords.length);
  });
});
