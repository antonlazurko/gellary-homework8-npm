const galleryListEl = document.querySelector('.gallery.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const overlay = document.querySelector('.lightbox__overlay');

export { galleryListEl, modalEl, modalImg, modalCloseBtn, overlay };
