import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

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
  const round = 3;
  let i = 0;
  while (i < round) {
    const data = getAnswers();
    const question = car(data);
    const correctAnswer = cdr(data);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
