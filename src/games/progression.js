import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';


const rules = 'What number is missing in the progression?';

const genQuestion = () => {
  const start = [genRandNum(0, 100)];
  const diff = 2;
  const range = 10;
  const arr = [];
  for (let i = 0; i < range; i += 1) {
    arr.push(+start + (i * diff));
  }

  const randomIndex = genRandNum(2, range);
  arr[randomIndex] = '..';

  return arr.join(' ');
};

const getCorrectAnswer = (question) => {
  const diff = 2;
  const numbers = question.split(' ');
  const result = +numbers[0] + (+numbers.indexOf('..') * diff);
  return String(result);
};

const playProgressionGame = () => {
  launchGameEngine(rules, genQuestion, getCorrectAnswer);
};

export default playProgressionGame;
