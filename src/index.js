import readlineSync from 'readline-sync';

const launchGameEngine = (rules, genQuestion, getCorrectAnswer) => {
  let roundCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i hahe you name?:');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  while (roundCount !== 0) {
    const question = genQuestion();
    console.log(question);
    const correctAnswer = getCorrectAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

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
