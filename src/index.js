import readlineSync from 'readline-sync';

const main = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May i habe you name?:');
    console.log(`Hello, ${userName}!`);
};

export default main;
