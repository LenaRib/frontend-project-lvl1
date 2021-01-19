import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

export function hello() {
  console.log('Welcome to the Brain Games!');
  if (name) {
    console.log('Hello, %s!', name);
  }
}

export function evenGame() {
  hello();
}
