import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import searchImages from './js/pixabay-api.js';
import renderImages from './js/render-functions.js';

const input = document.querySelector('.input');
const gallery = document.querySelector('.gallery');
const form = document.querySelector('.form');
const loader = document.querySelector('.loader');

form.addEventListener('submit', event => {
  event.preventDefault();

  const search = input.value.trim();

  if (search === '') {
    iziToast.show({
      title: '❌',
      message: 'Please enter the appropriate search query!',
      messageColor: 'white',
      backgroundColor: 'red',
      position: 'topRight',
    });
    return;
  }
  loader.classList.remove('is-hidden');
  gallery.innerHTML = '';
  // data.hits  - зображення
  searchImages(search)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          title: '❌',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'black',
          backgroundColor: 'orange',
          position: 'topRight',
        });
        return;
      }
      renderImages(data.hits);
      form.reset();
    })
    .catch(error =>
      iziToast.show({
        title: '❌',
        message: error.message,
        messageColor: 'black',
        backgroundColor: 'red',
        position: 'topRight',
      })
    )
    .finally(() => {
      loader.classList.add('is-hidden');
    });
});
