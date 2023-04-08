/**
 * @type {HTMLLIElement}
 */
const preview = document.querySelector('.big-picture__preview');

/**
 * @type {HTMLUListElement}
 */
const discussion = preview.querySelector('.social__comments');

/**
 * @type {HTMLLIElement}
 */
const commentTemplate = discussion.querySelector('.social__comment');

/**
 * @type {HTMLButtonElement}
 */
const moreButton = preview.querySelector('.comments-loader');

/**
 * @type {PictureState  & {commentsTotal: number}}
 */
let currentDate;

/**
 * @param {CommentState} data
 * @return {HTMLLIElement}
 */
const createComment = (data) => {
  const comment =
  /**
   * @type {HTMLLIElement}
   */
  (commentTemplate.cloneNode(true));

  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('alt', data.name);
  comment.querySelector('.social__text').textContent = data.message;
  return comment;
};

const onMoreButtonClick = () => {
  const newComments = currentDate.comments.splice(0,5).map(createComment);
  const show = currentDate.commentsTotal - currentDate.comments.length;
  preview.querySelector('.comments-show').textContent = String(show);
  discussion.append(...newComments);
  moreButton.classList.toggle('hidden', show === currentDate.commentsTotal);
};

/**
 * @param {PictureState} data
 */
const updatePreview = (data) => {
  currentDate = {
    ...structuredClone(data),
    commentsTotal: data.comments.length
  };
  preview.querySelector('.big-picture__img img').setAttribute('src', currentDate.url);
  preview.querySelector('.likes-count').textContent = String(currentDate.likes);
  preview.querySelector('.social__caption').textContent = currentDate.description;

  preview.querySelector('.comments-count').textContent = String(currentDate.commentsTotal);
  discussion.replaceChildren();
  moreButton.addEventListener('click', onMoreButtonClick);
  moreButton.click();
};

export default updatePreview;
