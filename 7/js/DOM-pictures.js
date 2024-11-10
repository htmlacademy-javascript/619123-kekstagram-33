import {pictureParams} from './picture-params-generator.js';

// Находим шаблон и контейнер для вставки элементов
const template = document.getElementById('picture');
const picturesContainer = document.querySelector('.pictures');

// Создаем DocumentFragment, чтобы временно хранить все сгенерированные элементы
const fragment = document.createDocumentFragment();

// Функция для создания и настройки элемента на основе шаблона
function createPictureElement({ url, description, comments, likes }) {
  const templateContent = template.content.cloneNode(true);
  // сама картинка и alt текст к ней
  const pictureImg = templateContent.querySelector('.picture__img');
  pictureImg.src = url;
  pictureImg.alt = description;
  // лайки и комменты
  templateContent.querySelector('.picture__comments').textContent = `${comments } comments`;
  templateContent.querySelector('.picture__likes').textContent = `${likes } likes`;

  return templateContent;
}

// Создаем и добавляем все элементы в fragment (хранится в оперативной памяти?)

// Вызываем функцию создания элемента для каждого элемента массива с данными

for (const item of pictureParams) {
  const pictureElement = createPictureElement(item);
  fragment.appendChild(pictureElement);
}

// Вставляем все элементы из fragment в контейнер .pictures
picturesContainer.appendChild(fragment);
