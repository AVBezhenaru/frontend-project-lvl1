// import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const genQuestion = () => genRandNum(0, 100);
const getCorrectAnswer = (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};

const playEvenGame = () => {
  launchGameEngine(rules, genQuestion, getCorrectAnswer);
};

export default playEvenGame;
