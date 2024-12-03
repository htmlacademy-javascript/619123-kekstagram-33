export const template = document.getElementById('picture');
export const picturesContainer = document.querySelector('.pictures');

// popupOpen
export const bigPicture = document.querySelector('.big-picture');
export const loadMore = bigPicture.querySelector('.comments-loader');
export const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
export const bigPictureDescription = bigPicture.querySelector('.social__caption');
export const userAvatar = bigPicture.querySelector('.social__header .social__picture'); // ищем элемент social__picture внутри элемента с .social__header
export const bigPictureLikes = bigPicture.querySelector('.social__likes .likes-count');
export const commentsList = bigPicture.querySelector('.social__comments');
export const commentsCounter = bigPicture.querySelector('.social__comment-count');
export const commentsShown = bigPicture.querySelector('.social__comment-shown-count');
export const commentsTotal = bigPicture.querySelector('.social__comment-total-count');
// export const pictureThumbnailsLinks = document.querySelectorAll('.picture');
export const dynamicCommentsList = bigPicture.getElementsByClassName('social__comment'); // создает динамическую коллекцию комментариев

// popupClose
export const closeButtons = document.querySelectorAll('.cancel');

// Загрузчик картинок
export const uploadOverlay = document.querySelector('.img-upload__overlay');
export const uploadInput = document.querySelector('.img-upload__input');
export const uploadForm = document.querySelector('.img-upload__form');
export const uploadButton = document.querySelector('.img-upload__submit');
export const hashtagInput = document.querySelector('.text__hashtags');
export const descriptionInput = document.querySelector('.text__description');
export const wrapperError = document.querySelector('.img-upload__field-wrapper');
