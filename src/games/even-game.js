// import readlineSync from 'readline-sync';
import genRandNum from '../genRandNum.js';
import launchGameEngine from '../index.js';

const evenGame = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  question: 0,
  getQuestion() {
    this.question = genRandNum(0, 100);
  },
  answer: '',
  getAnswer() {
    this.answer = (this.question % 2 === 0 ? 'yes' : 'no');
  },
};

const playEvenGame = () => {
  launchGameEngine(evenGame);
};

export default playEvenGame;
