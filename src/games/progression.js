import genRandNum from '../genRandNum.js';
import engine from '../index.js';


const descripiton = 'What number is missing in the progression?';

const genQuestion = () => {
  const start = [genRandNum(0, 100)];
  const diff = genRandNum(2, 10);
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
  const numbers = question.split(' ');
  const diff = (+numbers[1] - (+numbers[0]));
  const result = +numbers[0] + (+numbers.indexOf('..') * diff);
  return String(result);
};

const questionAnswerGenerate = () => {
  const question = genQuestion();
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

const lauchProgressionGame = () => {
  engine(descripiton, questionAnswerGenerate);
};

export default lauchProgressionGame;
