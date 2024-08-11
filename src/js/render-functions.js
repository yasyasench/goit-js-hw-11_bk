import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
  disableScroll: true,
}); // ззовні

const renderImages = resultData => {
  const image = resultData
    .map(
      element =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${element.largeImageURL}">
          <img
            class="item-image"
            src="${element.webformatURL}"
            alt="${element.tags}"
          />
        </a>
        <div class="main-content">
          <ul class="card-list">
            <li class="card-list-li">
              <h3>Likes</h3>
              <p>${element.likes}</p>
            </li>
            <li class="card-list-li">
              <h3>Views</h3>
              <p>${element.views}</p>
            </li>
            <li class="card-list-li">
              <h3>Comments</h3>
              <p>${element.comments}</p>
            </li>
            <li class="card-list-li">
              <h3>Downloads</h3>
              <p>${element.downloads}</p>
            </li>
          </ul>
        </div>
      </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', image);

  lightbox.refresh();
};

export default renderImages;