/* eslint-disable prefer-arrow-callback */
import { picturesContainer } from './DOM-pictures';
import { pictureParams } from './picture-params-generator.js';

// Находим необходимые элементы
const bigPicture = document.querySelector('.big-picture');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const userAvatar = bigPicture.querySelector('.social__picture');
const bigPictureDescription = bigPicture.querySelector('.social__caption');
const bigPictureLikes = bigPicture.querySelector('.social__likes .likes-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotal = bigPicture.querySelector('.social__comment-total-count');

// Функция создания DOM-элемента для комментария
function createComment(comment) {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  newComment.appendChild(commentAvatar);
  newComment.appendChild(commentText);
  return newComment;
}

// Функция создания списка комментов
function insertComments() {
  commentsList.innerHTML = ''; // очищаем список комментов
  const pictureThumbnail = document.querySelector('.picture__img');
  const pictureId = parseInt(pictureThumbnail.dataset.id, 10);
  const pictureData = pictureParams[pictureId - 1];
  if (!pictureData || !Array.isArray(pictureData.comments)) {
    // eslint-disable-next-line no-console
    console.error('Данные для комментариев не найдены');
    return;
  }
  const commentsArray = pictureData.comments;
  commentsShown.textContent = commentsArray.length;
  commentsTotal.textContent = commentsArray.length;
  commentsArray.forEach(function (comment) {
    const commentElement = createComment(comment);
    commentsList.appendChild(commentElement);
  });
}

// Функция для открытия попапа
function openPopup(imageUrl, description, likesCount) {
  bigPictureImg.src = imageUrl;
  userAvatar.src = imageUrl;
  bigPictureDescription.textContent = description;
  bigPictureLikes.textContent = likesCount;
  insertComments();
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  document.body.classList.add('modal-open');
}

// Обработчик клика на миниатюру
picturesContainer.addEventListener('click', function (evt) {
  evt.preventDefault();
  const pictureLink = evt.target.closest('.picture');
  if (pictureLink) {
    const imageUrl = pictureLink.querySelector('img').src;
    const description = pictureLink.querySelector('img').alt;
    const likesCount = pictureLink.querySelector('.picture__likes').textContent;
    openPopup(imageUrl, description, likesCount);
  }
});

export { bigPicture };
