/* eslint-disable prefer-arrow-callback */
import {IMAGE_LIST_LENGTH, LIKES_COUNT, COMMENTS_COUNT} from './const.js';
import {descriptionExamples, messageExamples, commentatorNames} from './lorem-upsum-data.js';
import {getRandomInteger} from './random-number-from-range.js';
import {getRandomArrayElement} from './random-array-element.js';

const makeCommentIdGenerator = function() {
  let commentId = 0;
  return function() {
    commentId += 1;
    return commentId;
  };
};

const generateCommentId = makeCommentIdGenerator();

// Функция создания комментариев к фотографиям
const createComments = function() {
  return {
    id: generateCommentId(),
    avatar: `img/avatar${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(messageExamples),
    name: getRandomArrayElement(commentatorNames),
  };
};

// Функция создания объектов, содержащих параметры загруженных картинок
const createImageParams = function(idIndex) {
  return {
    id: idIndex,
    url: `photos/${idIndex}.jpg`,
    description: getRandomArrayElement(descriptionExamples),
    likes: getRandomInteger(LIKES_COUNT.min, LIKES_COUNT.max),
    comments: Array.from({length: getRandomInteger(COMMENTS_COUNT.min, COMMENTS_COUNT.max)}, createComments),
  };
};

const pictureParams = Array.from({ length: IMAGE_LIST_LENGTH }, function(_, idIndex) {
  return createImageParams(idIndex + 1);
});

export {pictureParams};
