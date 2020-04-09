// import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'Answer "yes" if the number is even, otherwise answer "no".';

const genQuestion = () => genRandNum(0, 100);
const getCorrectAnswer = (question) => {
  const result = question % 2 === 0 ? 'yes' : 'no';
  return result;
};

const questionAnswerGenerate = () => {
  const question = genQuestion();
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

const launchEvenGame = () => {
  engine(descripiton, questionAnswerGenerate);
};

export default launchEvenGame;
