import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';

const genRandOperations = () => {
  const randNum1 = genRandNum();
  const randNum2 = genRandNum();
  const operators = ['+', '-', '*'];
  const randOperator = operators[genRandNum(0, operators.length - 1)];
  const result = [];

  switch (randOperator) {
    case '+':
      result[0] = (`${randNum1} + ${randNum2}`);
      result[1] = (randNum1 + randNum2);
      break;
    case '-':
      result[0] = (`${randNum1} - ${randNum2}`);
      result[1] = (randNum1 - randNum2);
      break;
    case '*':
      result[0] = (`${randNum1} * ${randNum2}`);
      result[1] = (randNum1 * randNum2);
  }

  return result;
};

const calcGame = () => {
  const resultsRandOperations = genRandOperations();
  const gameQuestion = resultsRandOperations[0];
  const correctAnswer = resultsRandOperations[1];
  console.log('What is the result of the expression?');
  console.log(gameQuestion);
  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === correctAnswer) {
    return true;
  } else {
    console.log(`Your answer: ${userAnswer}, ${userAnswer} is wrong answer ;(.Correct answer was ${correctAnswer}.`);
    return false;
  }
};

export default calcGame;
