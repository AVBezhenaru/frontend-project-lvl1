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
  const result = progression[Math.floor(Math.random() * progression.length - 1)];
  return result;
};
const questionAnswerGenerate = () => {
  const progression = generateArithmeticProgression(genRandNum(0, 100), genRandNum(1, 10), 10);
  const randomElement = getRandomProgressionElement(progression);
  progression[progression.indexOf(randomElement)] = '..';
  const question = progression.join(' ');
  const answer = `${randomElement}`;
  return [question, answer];
};

const lauchProgressionGame = () => engine(descripiton, questionAnswerGenerate);

export default lauchProgressionGame;
