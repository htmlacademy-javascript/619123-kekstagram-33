/* eslint-disable prefer-arrow-callback */
import { HASHTAGS_MAX_AMOUNT, HASHTAGS_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from './const';

let hashtagsArray = [];

function checkType (value) {
  hashtagsArray = value.trim().split(/\s+/);
  const regex = new RegExp(`^#[A-Za-z0-9А-Яа-я]{1,${HASHTAGS_MAX_LENGTH}}$`);
  return hashtagsArray.every((hashtag) => regex.test(hashtag));
}

function checkUnique(value) {
  // Разбиваем строку на хештеги
  hashtagsArray = value.trim().split(/\s+/);
  // Проверка на дубликаты
  return hashtagsArray.length === new Set(hashtagsArray).size;
}

function checkHashtagCount (value) {
  hashtagsArray = value.trim().split(/\s+/);
  return hashtagsArray.length < HASHTAGS_MAX_AMOUNT;
}

function checkDescriptionLength(value) {
  return value.length <= DESCRIPTION_MAX_LENGTH;
}

export { checkType, checkUnique, checkHashtagCount, checkDescriptionLength};
