import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const questionAnswerGenerate = () => {
  const question = genRandNum(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const lauchGcdGame = () => engine(descripiton, questionAnswerGenerate);

export default lauchGcdGame;
