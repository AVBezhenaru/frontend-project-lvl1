import readlineSync from 'readline-sync';

const launchGameEngine = (game) => {
  let roundCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i hahe you name?:');
  console.log(`Hello, ${userName}!`);
  console.log(game.rules);

  while (roundCount !== 0) {
    game.getQuestion();
    game.getAnswer();
    console.log(game.question);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = game.answer;

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      roundCount -= 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default launchGameEngine;
