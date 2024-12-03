/* eslint-disable no-alert */
/* eslint-disable prefer-arrow-callback */
import { uploadForm, uploadButton, hashtagInput, descriptionInput } from './DOM-elements.js';
import { HASHTAGS_MAX_AMOUNT, HASHTAGS_MAX_LENGTH, DESCRIPTION_MAX_LENGTH } from './const';
import { checkType, checkUnique, checkHashtagCount, checkDescriptionLength } from './validation-rules.js';

const errorMessageConfig = {
  classTo: 'img-upload__field-wrapper', // Блок с классом .img-upload__field-wrapper
  errorTextParent: 'img-upload__field-wrapper', // Текст ошибки внутри того же блока
  errorTextClass: 'img-upload__field-wrapper--error' // Класс для стилизации текста ошибки
};

const pristine = new Pristine(uploadForm, errorMessageConfig, true);

pristine.addValidator(
  hashtagInput,
  checkType,
  `Хештеги должны начинаться с #, состоять из букв или цифр и быть не длиннее ${HASHTAGS_MAX_LENGTH} символов`
);

pristine.addValidator(
  hashtagInput,
  checkUnique,
  'Хештеги не должны повторяться'
);

pristine.addValidator(
  hashtagInput,
  checkHashtagCount,
  `Хештегов слишком много, их не должно быть больше ${HASHTAGS_MAX_AMOUNT}`
);

pristine.addValidator(
  descriptionInput,
  checkDescriptionLength,
  `В комментарии не должно быть больше ${DESCRIPTION_MAX_LENGTH} символов`
);

uploadButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const isEmpty = hashtagInput.value.trim() === ''; // Проверяем, что поле пустое
  if (isEmpty) {
    alert('Форма отправлена успешно'); // Если поле пустое, сразу считаем его валидным и отправляем форму
  } else {
    const isValid = pristine.validate(); // Если поле не пустое, запускаем валидацию
    if (isValid) {
      alert('Форма отправлена успешно');
    } else {
      alert('Есть ошибки в форме');
    }
  }
});
