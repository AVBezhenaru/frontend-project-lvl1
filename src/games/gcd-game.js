import readlineSync from 'readline-sync';

const gcd = (a, b) => {
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
  const randomRange = 100;
  const randomNumber1 = Math.floor(Math.random() * randomRange);
  const randomNumber2 = Math.floor(Math.random() * randomRange);
  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  const result = gcd(randomNumber1, randomNumber2);
  const answer = readlineSync.question('Your answer: ');

  if (result === parseInt(answer, 10)) {
    return true;
  } else {
    console.log(`Your answer: ${answer}, ${answer} is wrong answer ;(.Correct answer was ${result}.`);
    return false;
  }
};

export default gcdGame;
