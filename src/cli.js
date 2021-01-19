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
  let randomNum;
  let notEven;
  let correct = 1;

  console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  for (correct = 0; correct < 3;) {
    randomNum = Math.floor(Math.random() * 100 + 1);
    notEven = randomNum % 2;
    console.log('Question: %d', randomNum);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === 'yes') {
      if (!notEven) {
        console.log('Correct!');
        correct += 1;
      } else {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, %s!', name);
        correct = 0;
      }
    } else if (userAnswer === 'no') {
      if (notEven) {
        console.log('Correct!');
        correct += 1;
      } else {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.\nLet\'s try again, %s!', name);
        correct = 0;
      }
    } else {
      console.log('Not correct input, please, try again');
      correct = 0;
    }
  }
  if (correct === 3) console.log('Congratulations, %s!', name);
}
