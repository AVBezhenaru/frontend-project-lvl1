import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'Find the greatest common divisor of given numbers.';
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
const questionAnswerGenerate = () => {
  const randNum1 = genRandNum(1, 100);
  const randNum2 = genRandNum(1, 100);
  const question = `${randNum1} ${randNum2}`;
  const answer = String(getGCD(randNum1, randNum2));
  return [question, answer];
};

const lauchGcdGame = () => engine(descripiton, questionAnswerGenerate);

export default lauchGcdGame;
