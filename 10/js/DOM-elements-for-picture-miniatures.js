/* eslint-disable prefer-arrow-callback */
import {pictureParams} from './picture-params-generator.js';

// Нашли темплейт в разметке и контейнер для вставки элементов
import {template, picturesContainer} from './DOM-elements.js';

// Создаем DocumentFragment, чтобы временно хранить все сгенерированные элементы (хранится в оперативной памяти)
const fragment = document.createDocumentFragment();

// Функция для создания и настройки элемента на основе шаблона
function createPictureElement({ url, description, id, comments, likes }) {
  const templateContent = template.content.cloneNode(true); // клонируем темплейт
  const pictureImg = templateContent.querySelector('.picture__img'); //Сама картинка и alt текст к ней
  pictureImg.src = url;
  pictureImg.alt = description;
  pictureImg.setAttribute('data-id', id); // Присваиваем id как data-атрибут
  // Форматируем и отображаем количество комментариев
  const commentsElement = templateContent.querySelector('.picture__comments'); //создали элемент с нужным тегом по темплейту
  commentsElement.textContent = Array.isArray(comments);
  if (Array.isArray(comments)) {
    commentsElement.textContent = `${comments.length}`; // Если comments массив, отображаем количество комментариев
  } else {
    commentsElement.textContent = '0'; // Если comments не массив, выводим сообщение "Нет комментариев"
  }
  // Лайки
  templateContent.querySelector('.picture__likes').textContent = `${likes}`;
  return templateContent;
}

// Цикл перебирает каждый объект (object) в массиве pictureParams и для каждого запускает функцию создания DOM-элемента
for (const object of pictureParams) {
  const pictureElement = createPictureElement(object);
  fragment.appendChild(pictureElement); // Создаем и добавляем все элементы в fragment
}

picturesContainer.appendChild(fragment); // Вставляем все элементы из fragment в контейнер .pictures
export {picturesContainer};
