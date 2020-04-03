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


const rules = 'Find the greatest common divisor of given numbers.';
const genQuestion = () => {
  const randNum1 = genRandNum(1, 100);
  const randNum2 = genRandNum(1, 100);
  return (`${randNum1} ${randNum2}`);
};
const getCorrectAnswer = (question) => {
  const numbers = question.split(' ');
  return String(getGCD(parseInt(numbers[0], 10), parseInt(numbers[1], 10)));
};

const playGcdGame = () => {
  launchGameEngine(rules, genQuestion, getCorrectAnswer);
};

export default playGcdGame;
