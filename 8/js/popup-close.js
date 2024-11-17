/* eslint-disable prefer-arrow-callback */
import {bigPicture} from './popup-open';
const closeButton = document.querySelector('.big-picture__cancel');

// Функция закрытия попапа
function closePopup() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Закрытие окна по клику на кнопку (иконку закрытия)
closeButton.addEventListener('click', closePopup);

// Добавляем обработчик события нажатия клавиши "Esc"
document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape' && !bigPicture.classList.contains('hidden')) {
    closePopup();
  }
});

