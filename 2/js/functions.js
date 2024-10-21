// Функция для проверки длины строки
// Через стрелочную функцию - const checkStringLength => string.length <= maxLength

function checkStringLength(string, maxLength) {
  return (string.length <= maxLength);
}

checkStringLength('Example',2);

// Функция для проверки на палиндром

function isPalindrom (string) {
  const stringCleaned = string.toLowerCase().replaceAll(' ', '');
  // или можно в две строки: сначала применится верхняя строка, потом нижняя

  let stringReversed = '';

  for (let i = stringCleaned.length - 1; i >= 0; i--) {
    stringReversed += stringCleaned[i];
  }
  // или можно массивом

  return string === stringReversed;
}

isPalindrom('kayak');

// 5.16. Функции возвращаются

const getMinutes = function(stroke) {
  const array = stroke.split(':');
  const minutesFromZero = Number(array[0]) * 60 + Number(array[1]);
  return minutesFromZero;
};

// eslint-disable-next-line no-unused-vars
const checkTimeRange = function(workStart, workEnd, meetingStart, meetingMinutes) {
  const minutesStart = getMinutes(workStart);
  const minutesEnd = getMinutes(workEnd);
  const meetingMinutesStart = getMinutes(meetingStart);
  const meetingMinutesEnd = meetingMinutesStart + meetingMinutes;

  let result;

  if (minutesStart <= meetingMinutesStart) {
    if (minutesEnd >= meetingMinutesEnd) {
      result = true;
    } else {
      result = false;
    }
  } else {
    result = false;
  }

  return result;
};
