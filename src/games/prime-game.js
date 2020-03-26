import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let count = 0;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }

  if (count > 1) {
    return false;
  }
  return true;
};

const primeGame = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  question: 0,
  getQuestion() {
    this.question = genRandNum(0, 100);
  },
  answer: '',
  getAnswer() {
    const result = isPrime(this.question);
    this.answer = result === true ? 'yes' : 'no';
  },
};

const playPrimeGame = () => {
  launchGameEngine(primeGame);
};

export default playPrimeGame;
