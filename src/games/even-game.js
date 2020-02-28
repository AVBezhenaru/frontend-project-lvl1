import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randNum = genRandNum(0, 100);
  console.log(`Question: ${randNum}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';

  if (correctAnswer === userAnswer) {
    return true;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    return false;
  }
};
export default evenGame;
