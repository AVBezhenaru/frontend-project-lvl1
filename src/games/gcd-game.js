import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';

const getGCD = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};

const gcdGame = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const randNum1 = genRandNum(1, 200);
  const randNum2 = genRandNum(1, 200);
  console.log(`Question: ${randNum1} ${randNum2}`);

  const correctAnswer = getGCD(randNum1, randNum2);
  const userAnswer = readlineSync.question('Your answer: ');

  if (correctAnswer === parseInt(userAnswer, 10)) {
    return true;
  } else {
    console.log(`Your answer: ${userAnswer}, ${userAnswer} is wrong answer ;(.Correct answer was ${correctAnswer}.`);
    return false;
  }
};

export default gcdGame;
