import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const min = 1;
const max = 100;
let correctAnswer = '';

const getAnswer = () => {
  const question = Math.floor(Math.random() * (max - min + 1)) + min;
  if (question < 2) correctAnswer = 'no';

  for (let i = 2; i <= question / 2; i += 1) {
    if (question % i === 0) correctAnswer = 'no';
  }
  correctAnswer = 'yes';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getAnswer);
