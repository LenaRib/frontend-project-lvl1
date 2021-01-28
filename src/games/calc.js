// eslint-disable-next-line import/no-named-as-default
import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const min = 1;
const max = 10;
const operations = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getAnswer = () => {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  const operationIndex = Math.floor(Math.random() * 3);
  const question = `${num1} ${operations[operationIndex]} ${num2}`;
  let correctAnswer;
  switch (operations[operationIndex]) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      return false;
  }
  return cons(question, String(correctAnswer));
};

export default () => playGame(description, getAnswer);
