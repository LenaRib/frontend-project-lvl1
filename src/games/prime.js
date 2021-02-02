import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getAnswer = () => {
  const question = Math.floor(Math.random() * (max - min + 1)) + min;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getAnswer);
