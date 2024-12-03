/* eslint-disable prefer-arrow-callback */
import { closeButtons, bigPicture, uploadOverlay, uploadInput, descriptionInput, hashtagInput} from './DOM-elements.js';

function resetInputs() {
  uploadInput.value = ''; // Сброс значения uploadInput
  descriptionInput.value = ''; // Сброс значения descriptionInput
  hashtagInput.value = ''; // Сброс значения hashtagInput
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetInputs();
}

// Закрытие окна по клику на кнопку (иконку закрытия)
closeButtons.forEach(function (closeButton) {
  closeButton.addEventListener('click', function () {
    if (!bigPicture.classList.contains('hidden')) {
      closePopup(bigPicture);
    } else if (!uploadOverlay.classList.contains('hidden')) {
      closePopup(uploadOverlay);
    }
  });
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    // Проверяем, не находится ли фокус на descriptionInput или hashtagInput
    if (document.activeElement !== descriptionInput && document.activeElement !== hashtagInput) {
      // Если фокус не на инпутах, проверяем, какой попап открыт и закрываем его
      if (!uploadOverlay.classList.contains('hidden')) {
        closePopup(uploadOverlay); // Закрываем uploadOverlay
      } else if (!bigPicture.classList.contains('hidden')) {
        closePopup(bigPicture); // Закрываем bigPicture
      }
    }
  }
});

