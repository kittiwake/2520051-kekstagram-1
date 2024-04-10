import {createdPhotoInfo} from './generate-data.js';

const similarPhoto = createdPhotoInfo;

const pictureTemplate = document.querySelector('#picture').content;
const similarListElement = document.querySelector('.pictures');
const similarListFragment = document.createDocumentFragment();

similarPhoto.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(pictureElement);
});

similarListElement.appendChild(similarListFragment);
