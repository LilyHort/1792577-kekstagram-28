
/**
 * @type {HTMLElement}
 */
const gallery = document.querySelector('.pictures');

/**
 * @type {HTMLTemplateElement}
 */
const pictureTemplate = document.querySelector('#picture');

/**
 * @param {PictureState} data
 * @return {HTMLAnchorElement}
 */
export const createPicture = (data) => {
  const picture =
  /**
  * @type {HTMLAnchorElement}
  */
 (pictureTemplate.content.querySelector('.picture').cloneNode(true));

  picture.querySelector('.picture__img').setAttribute('src', data.url);
  picture.querySelector('.picture__likes').textContent = String(data.likes);
  picture.querySelector('.picture__comments').textContent = String(data.comments.length);

  return picture;
};

/**
 * @param {PictureState[]} data
 */
export const renderPictures = (data) => {
  const pictures = gallery.querySelectorAll('.picture');
  const newPictures = data.map(createPicture);

  pictures.forEach((picture) => picture.remove());
  gallery.append(...newPictures);
};

/**
 * @param {PictureState[]} data
 */
const initGallary = (data) => {
  //TODO: Cортировка
  renderPictures(data);
};

export default initGallary;
