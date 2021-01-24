// eslint-disable-next-line import/no-named-as-default
import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const min = 1;
const max = 100;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getAnswer = () => {
  const question = Math.floor(Math.random() * (max - min + 1)) + min; // max not included
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => playGame(description, getAnswer);
