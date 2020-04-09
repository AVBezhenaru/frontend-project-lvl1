import readlineSync from 'readline-sync';

const engine = (descripiton, questionAnswerGenerate) => {
  const roundCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i hahe you name?:');
  console.log(`Hello, ${userName}!`);
  console.log(descripiton);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = questionAnswerGenerate();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default engine;
