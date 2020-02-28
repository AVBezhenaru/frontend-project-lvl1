const genRandNum = (min = 0, max = 10) => {
  const randNum = (min + Math.random() * (max + 1 - min));
  return Math.floor(randNum);
};

export default genRandNum;
