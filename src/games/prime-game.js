import readlineSync from 'readline-sync';

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
    return 'no';
  } else {
    return 'yes';
  }
};

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const randomRange = 100;
  const randomNumber = Math.floor(Math.random() * randomRange);
  console.log(randomNumber);
  const answer = readlineSync.question('Your answer: ');

  const result = isPrime(randomNumber);
  if (answer === result) {
    return true;
  } else {
    console.log(`Your answer: ${answer}, ${answer} is wrong answer ;(.Correct answer was ${result}.`);
    return false;
  }
};


export default primeGame;
