import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'What is the result of the expression?';
const calculator = (operand1, operand2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = (operand1 + operand2);
      break;
    case '-':
      result = (operand1 - operand2);
      break;
    case '*':
      result = (operand1 * operand2);
      break;
    default:
  }
  return String(result);
};

const questionAnswerGenerate = () => {
  const randNum1 = genRandNum();
  const randNum2 = genRandNum();
  const operators = ['+', '-', '*'];
  const randOperator = operators[genRandNum(0, operators.length - 1)];

  const question = `${randNum1} ${randOperator} ${randNum2}`;
  const answer = calculator(randNum1, randNum2, randOperator);
  return [question, answer];
};

const lauchCalcGame = () => engine(descripiton, questionAnswerGenerate);

export default lauchCalcGame;
