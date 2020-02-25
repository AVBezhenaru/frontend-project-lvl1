import readlineSync from 'readline-sync';

const randomOperation = () => {
  const randomRange = 10;
  const randomNumber1 = Math.floor(Math.random() * randomRange);
  const randomNumber2 = Math.floor(Math.random() * randomRange);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(operators.length * Math.random())];
  const result = [];

  if (randomOperator === '+') {
    result[0] = (`${randomNumber1} + ${randomNumber2}`);
    result[1] = (randomNumber1 + randomNumber2);
  } else if (randomOperator === '-') {
    result[0] = (`${randomNumber1} - ${randomNumber2}`);
    result[1] = (randomNumber1 - randomNumber2);
  } else if (randomOperator === '*') {
    result[0] = (`${randomNumber1} * ${randomNumber2}`);
    result[1] = (randomNumber1 * randomNumber2);
  }

  return result;
};

const calcGame = () => {
  const valuesForbrainCalc = randomOperation();
  console.log('What is the result of the expression?');
  console.log(valuesForbrainCalc[0]);
  const answer = readlineSync.question('Your answer: ');

  if (parseInt(answer, 10) === valuesForbrainCalc[1]) {
    return true;
  } else {
    console.log(`Your answer: ${answer}, ${answer} is wrong answer ;(.Correct answer was ${valuesForbrainCalc[1]}.`);
    return false;
  }
};

export default calcGame;
