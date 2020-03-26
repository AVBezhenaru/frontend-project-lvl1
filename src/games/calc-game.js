import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const calcGame = {
  rules: 'What is the result of the expression?',
  question: 0,
  getQuestion() {
    const randNum1 = genRandNum();
    const randNum2 = genRandNum();
    const operators = ['+', '-', '*'];
    const randOperator = operators[genRandNum(0, operators.length - 1)];
    this.question = (`${randNum1} ${randOperator} ${randNum2}`);
    this.answer = (randNum1 + randOperator + randNum2);
  },
  answer: 0,
  getAnswer() {
    const numbers = this.question.split(' ');
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
    this.answer = String(result);
  },
};

const playCalcGame = () => {
  launchGameEngine(calcGame);
};

export default playCalcGame;
