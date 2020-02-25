import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const randomRange = 100;
  const randomNumber = Math.floor(Math.random() * randomRange);
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  if (randomNumber % 2 === 0 && answer === 'yes') {
    return true;
  } else if (randomNumber % 2 !== 0 && answer === 'no') {
    return true;
  } else if (randomNumber % 2 === 0 && answer === 'no') {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    return false;
  } else {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    return false;
  }
};
export default evenGame;
