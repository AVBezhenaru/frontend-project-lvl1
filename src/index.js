import readlineSync from 'readline-sync';

const gameFlow = (game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i habe you name?:');
  console.log(`Hello, ${userName}!`);

  if (!game) {
    return true;
  }

  let count = 0;
  const attempt = 3;

  while (count !== attempt) {
    if (game() === true) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`Let's try again, ${userName}!`);
      return false;
    }

    if (count === attempt) {
      console.log(`Congratulations, ${userName}!`);
      return true;
    }
  }
  return true;
};

export default gameFlow;
