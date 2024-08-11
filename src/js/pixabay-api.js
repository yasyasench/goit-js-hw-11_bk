const API_KEY = '45387575-fad478ac390e3d49aace0fe1c';

function searchImages(query) {
  const searchPhotos = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${searchPhotos}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export default searchImages;