import {getRandomInteger} from './random-number-from-range.js';

/* eslint-disable no-unused-vars */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

export {getRandomArrayElement};
