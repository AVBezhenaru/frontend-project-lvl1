import launchGameEngine from '../index.js';
import genRandNum from '../genRandNum.js';

const getGCD = (a, b) => {
  let one = a;
  let two = b;
  while (one !== two) {
    if (one > two) {
      one -= two;
    } else {
      two -= one;
    }
  }

  return one;
};

const gcdGame = {
  rules: 'Find the greatest common divisor of given numbers.',
  question: ' ',
  getQuestion() {
    const randNum1 = genRandNum(1, 100);
    const randNum2 = genRandNum(1, 100);
    this.question = `${randNum1} ${randNum2}`;
  },
  answer: '',
  getAnswer() {
    const numbers = this.question.split(' ');
    this.answer = String(getGCD(parseInt(numbers[0], 10), parseInt(numbers[1], 10)));
  },
};

const playGcdGame = () => {
  launchGameEngine(gcdGame);
};

export default playGcdGame;
