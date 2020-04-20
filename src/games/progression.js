import genRandNum from '../genRandNum.js';
import engine from '../index.js';

const descripiton = 'What number is missing in the progression?';
const generateArithmeticProgression = (start, diff, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + (i * diff));
  }
  return result;
};
const getRandomProgressionElement = (progression) => {
  const result = progression[genRandNum(0, progression.length - 1)];
  return result;
};
const questionAnswerGenerate = () => {
  const start = genRandNum(0, 100);
  const diff = genRandNum(1, 10);
  const length = 10;
  const progression = generateArithmeticProgression(start, diff, length);
  const randomElement = getRandomProgressionElement(progression);
  progression[progression.indexOf(randomElement)] = '..';
  const question = progression.join(' ');
  const answer = `${randomElement}`;
  return [question, answer];
};

const lauchProgressionGame = () => engine(descripiton, questionAnswerGenerate);

export default lauchProgressionGame;
