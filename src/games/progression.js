import { cons } from '@hexlet/pairs';
import { playGame } from '../index.js';

const description = 'What number is missing in the progression?';
const max = 100;
const min = 1;
const getRandomProgress = () => {
  const startProgressionInt = Math.floor(Math.random() * (max - min + 1)) + min;
  const progressionStep = Math.floor(Math.random() * 4) + 2;
  const progressionLength = Math.floor(Math.random() * 4) + 5;
  const hiddenPosition = Math.floor(Math.random() * (progressionLength - 1)) + 1;
  const correctAnswer = String(startProgressionInt + progressionStep * hiddenPosition);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenPosition) {
      question += '.. ';
    } else {
      question += `${startProgressionInt + progressionStep * i} `;
    }
  }

  return cons(question.trim(), correctAnswer);
};

export default () => playGame(description, getRandomProgress);
