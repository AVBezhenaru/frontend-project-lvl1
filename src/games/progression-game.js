import readlineSync from 'readline-sync';

const randProgArr = () => {
  const randomRange = 100;
  const randomNumber = Math.floor(Math.random() * randomRange);
  const range = 9;
  const step = 2;
  const arr = [randomNumber];
  for (let i = 0; i < range; i += 1) {
    arr.push(arr[i] + step);
  }

  const result = arr[Math.floor(Math.random() * arr.length)];
  const replaceIndex = arr.indexOf(result);
  arr[replaceIndex] = '..';

  const resultArr = [arr, result];
  return resultArr;
};

const progressionGame = () => {
  console.log('What number is missing in the progression?');
  const result = randProgArr();
  const strResult = result[0].join(' ');
  console.log(`Question: ${strResult}`);

  const answer = readlineSync.question('Your answer: ');

  if (result[1] === parseInt(answer, 10)) {
    return true;
  } else {
    console.log(`Your answer: ${answer}, ${answer} is wrong answer ;(.Correct answer was ${result[1]}.`);
    return false;
  }
};

export default progressionGame;
