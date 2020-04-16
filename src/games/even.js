// import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const questionAnswerGenerate = () => {
  const question = genRandNum(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const launchEvenGame = () => engine(descripiton, questionAnswerGenerate);

export default launchEvenGame;
