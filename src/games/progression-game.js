import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const progressionGame = {
  rules: 'What number is missing in the progression?',
  question: 0,
  getQuestion() {
    const range = 9;
    const step = 2;
    const arr = [genRandNum(0, 100)];

    for (let i = 0; i < range; i += 1) {
      arr.push(arr[i] + step);
    }

    const randNumOfArr = arr[Math.floor(Math.random() * arr.length)];
    const replaceIndex = arr.indexOf(randNumOfArr);
    arr[replaceIndex] = '..';
    this.question = arr.join(' ');
    this.answer = randNumOfArr;
  },
  answer: '',
  getAnswer() {
    this.answer = String(this.answer);
  },
};

const playProgressionGame = () => {
  launchGameEngine(progressionGame);
};

export default playProgressionGame;
