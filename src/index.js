import readlineSync from 'readline-sync';

const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i habe you name?:');
  console.log(`Hello, ${userName}!`);
};

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i habe you name?:');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomRange = 100;
  let count = 0;

  while (count !== 3) {
    const randomNumber = Math.floor(Math.random() * randomRange);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answer === 'yes') {
      count += 1;
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer === 'no') {
      count += 1;
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".
      Let's try again, ${userName}`);
      return false;
    } else if (randomNumber % 2 !== 0 && answer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".
      Let's try again, ${userName}`);
      return false;
    } else {
      console.log('incorrect response syntax, try again');
      return false;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
  return true;
};

export { brainGames, brainEven };
