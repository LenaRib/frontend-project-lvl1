import readlineSync from 'readline-sync';

export function hello() {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

export function playGame(gameDescription, getAnswers) {
  const greeting = 'Welcome to the Brain Games!';
  console.log(greeting);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameDescription}`);
  console.log(`${getAnswers}`);
}
