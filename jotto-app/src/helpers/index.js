export const getLetterMatchCount = (guessedWord, secretWord) => {
  const uniqGuessedLetters = new Set(guessedWord.split(''));
  const uniqSecretLetters = new Set(secretWord.split(''));

  return [...uniqGuessedLetters].filter((letter) => uniqSecretLetters.has(letter)).length;
};
