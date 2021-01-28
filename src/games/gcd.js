import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const min = 1;
const max = 30;
const description = 'Find the greatest common divisor of given numbers.';

const getAnswer = () => {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const question = `${num1} ${num2}`;
  let greatestDiv = Math.min(num1, num2);
  let correctAnswer = greatestDiv;

  while (greatestDiv > 1) {
    if ((num1 % greatestDiv === 0) && (num2 % greatestDiv === 0)) {
      correctAnswer = greatestDiv;
    }
    greatestDiv -= 1;
  }
  correctAnswer = greatestDiv;
  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getAnswer);
