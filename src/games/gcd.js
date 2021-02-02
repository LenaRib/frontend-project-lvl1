import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const min = 1;
const max = 30;
const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (!b ? a : getGcd(b, a % b));

const getAnswer = () => {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));
  return cons(question, correctAnswer);
};

export default () => playGame(description, getAnswer);
