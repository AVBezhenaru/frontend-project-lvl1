import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let count = 0;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      count += 1;
    }
  }

  if (count > 1) {
    return false;
  } else {
    return true;
  }
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randNum = genRandNum(0, 100);
  console.log(randNum);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const resultIsPrime = isPrime(randNum);
  const correctAnswer = resultIsPrime === true ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    return true;
  } else {
    console.log(`Your answer: ${userAnswer}, ${userAnswer} is wrong answer ;(.Correct answer was ${correctAnswer}.`);
    return false;
  }
};

export default primeGame;
