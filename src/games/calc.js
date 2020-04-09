import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'What is the result of the expression?';
const genQuestion = () => {
  const randNum1 = genRandNum();
  const randNum2 = genRandNum();
  const operators = ['+', '-', '*'];
  const randOperator = operators[genRandNum(0, operators.length - 1)];
  return (`${randNum1} ${randOperator} ${randNum2}`);
};
const getCorrectAnswer = (question) => {
  const numbers = question.split(' ');
  let result = 0;
  switch (numbers[1]) {
    case '+':
      result = (parseInt(numbers[0], 10) + parseInt(numbers[2], 10));
      break;
    case '-':
      result = (parseInt(numbers[0], 10) - parseInt(numbers[2], 10));
      break;
    case '*':
      result = (parseInt(numbers[0], 10) * parseInt(numbers[2], 10));
      break;
    default:
  }
  return String(result);
};

const questionAnswerGenerate = () => {
  const question = genQuestion();
  const answer = getCorrectAnswer(question);
  return [question, answer];
};

const lauchCalcGame = () => {
  engine(descripiton, questionAnswerGenerate);
};

export default lauchCalcGame;
