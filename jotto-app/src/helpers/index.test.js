import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';

  test('returns correct value when there are no matching letters', () => {
    const matchCount = getLetterMatchCount('bones', secretWord);

    expect(matchCount).toBe(0);
  });

  test('returns correct value when there are 3 matching letters', () => {
    const matchCount = getLetterMatchCount('train', secretWord);

    expect(matchCount).toBe(3);
  });

  test('returns correct value when there are duplicate letters', () => {
    const matchCount = getLetterMatchCount('parka', secretWord);

    expect(matchCount).toBe(3);
  });
});
