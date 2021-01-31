import { cons } from '@hexlet/pairs';
import checkAnswers from '..';

const description = 'What number is missing in the progression?';

const getRandomProgress = () => {
  const startProgressionInt = 1;
  const progressionStep = 2;
  const progressionLength = 10;
  const hiddenPosition = 0;
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

export default () => {
  checkAnswers(description, getRandomProgress);
};
