import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let count = 0;

  for (let i = 2; i < (number / 2); i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
};


const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const genQuestion = () => genRandNum(0, 100);
const getCorrectAnswer = (question) => {
  const result = isPrime(question);
  return result === true ? 'yes' : 'no';
};


const playPrimeGame = () => {
  launchGameEngine(rules, genQuestion, getCorrectAnswer);
};

export default playPrimeGame;
