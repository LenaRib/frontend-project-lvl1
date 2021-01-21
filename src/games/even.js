// eslint-disable-next-line import/no-named-as-default
import playGame from '../index';

const min = 1;
const max = 20;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const getAnswer = () => {
  const question = Math.floor(Math.random() * (max - min + 1)) + min;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return toString(question + correctAnswer);
};

export default () => playGame(description, getAnswer);
